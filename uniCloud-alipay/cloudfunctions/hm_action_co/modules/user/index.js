const utils = require('../utils/index.js');

module.exports = {
	async user_addUser(event) {
		let { userInfo } = event;
		console.log("user_addUser", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const addResult = await dbJQL.collection('hm-user').add(userInfo)
		return addResult;
	},

	async user_login(userForm) {
		console.log('user_login : ', userForm);
		let { loginType } = userForm;
		if (loginType === 'app') {
			return this.user_loginByApp(userForm);
		}
		if (loginType === 'account') {
			return this.user_loginByAccountAndPassword(userForm)
		}
		return this.user_loginBySmsCode(userForm);
	},

	async user_loginByApp(userForm) {
		console.log("app 一键登录", userForm);
		const { accessToken, openid } = userForm;
		const res = await uniCloud.getPhoneNumber({
			appid: '__UNI__6CB5534',
			provider: 'univerify',
			access_token: accessToken,
			openid: openid
		})
		console.log("换到的手机号", res);
		const phone = res.phoneNumber;
		const secret = utils.utils_getSecret();
		const dbJQL = uniCloud.databaseForJQL();
		try {
			const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			if (userRes.data.length > 0) {
				const user = userRes.data[0];
				const newToken = tokenEvent.getToken({
					phone: phone,
					account: user.account,
					account_id: user._id
				}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
				await dbJQL.collection('hm-user').doc(user._id).update({
					'hm_token': newToken
				});
				user.hm_token = newToken;
				return {
					errCode: 0,
					errMsg: "",
					data: {
						token: newToken
					}
				};
			}
			return this.user_registerByPhone(phone);
		} catch (e) {
			throw new Error(e)
		}
	},

	async user_loginByAccountAndPassword(userForm) {
		const { account, password } = userForm;
		const dbJQL = uniCloud.databaseForJQL();
		try {
			const ep = utils.utils_encryptPassword(password);
			const secret = utils.utils_getSecret();
			const wstr = `(account=='${account}'||email=='${account}'||phone=='${account}')&&password=='${ep}'`;
			console.log(wstr)
			const userRes = await dbJQL.collection('hm-user').where(wstr).get();
			console.log("uuuu", userRes);
			if (userRes.data.length < 1) {
				return { errCode: 1, errMsg: "账号密码不正确" };
			}
			const user = userRes.data[0];
			const newToken = tokenEvent.getToken({
				phone: user.phone,
				account: user.account,
				account_id: user._id
			}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
			await dbJQL.collection('hm-user').doc(user._id).update({
				'hm_token': newToken
			});
			return {
				errCode: 0,
				errMsg: "",
				data: {
					token: newToken
				}
			};
		} catch (error) {
			throw new Error(error);
		}
	},

	async user_loginBySmsCode(userForm) {
		let { smsCode, phone, tk } = userForm;
		const secret = utils.utils_getSecret();
		const dbJQL = uniCloud.databaseForJQL({
			event: { userForm },
			context: this.getClientInfo()
		});
		if (!this.user_isTestAccount(phone)) {
			const verifT = utils.utils_verifyToken(tk, secret);
			if (!verifT || verifT.value.smsCode != smsCode) {
				return { errCode: 202, errMsg: "验证码不正确" };
			}
		}
		try {
			const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			if (userRes.data.length > 0) {
				const user = userRes.data[0];
				const newToken = tokenEvent.getToken({
					phone: user.phone,
					account: user.account,
					account_id: user._id
				}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
				await dbJQL.collection('hm-user').doc(user._id).update({
					'hm_token': newToken
				});
				return {
					errCode: 0,
					errMsg: "",
					data: {
						token: newToken
					}
				};
			}
			return this.user_registerByPhone(phone)
		} catch (e) {
			throw new Error(e);
		}
	},

	async user_registerByPhone(phone) {
		console.log("注册");
		const secret = utils.utils_getSecret();
		const newToken = tokenEvent.getToken({
			phone: phone
		}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
		const dbJQL = uniCloud.databaseForJQL();
		const res = await dbJQL.collection('hm-user').add(this.user_getUser(phone, newToken));
		return {
			errCode: 0,
			errMsg: "",
			data: {
				token: newToken
			}
		};
	},

	async user_register(userForm = {}) {
		console.log("user_register", userForm);
		const { account, email, password } = userForm;
		const msg = await this.user_validRegisterForm(account, password, email);
		if (msg) {
			return {
				errCode: 101,
				errMsg: msg
			};
		}
		try {
			const dbJQL = uniCloud.databaseForJQL();
			const ep = utils.utils_encryptPassword(password);
			const user = this.user_formatUser(account, ep, email);
			console.log(user)
			const result = await dbJQL.collection('hm-user').add(user);
			return result
		} catch (error) {
			console.log(error)
			throw new Error(error);
		}
	},

	async user_validRegisterForm(account, password, email) {
		let msg = ""
		if (account == "") {
			msg = "账号不能为空";
		}
		if (password == "") {
			msg = "密码不能为空";
		}
		const dbJQL = uniCloud.databaseForJQL();
		const sql = `email=='${email}'||account=='${account}'`;
		const validuser = await dbJQL.collection('hm-user').where(sql).get();
		if (validuser.data.length > 0) {
			const hasAccount = validuser.data.find(item => item.account == account);
			const hasEmail = validuser.data.find(item => item.email == email);
			if (hasAccount) {
				msg = "该账号已经注册";
			}
			if (hasEmail) {
				msg = "该邮箱已经注册";
			}
		}
		return msg;
	},

	async user_sendSms(event) {
		let { appid, phone, templateId = 'uni_sms_test' } = event;
		const db = uniCloud.database();
		const smsCode = this.user_randomSms();
		if (this.getClientInfo().SPACEINFO.spaceId == "env-00jxh1m2dpmq" || this.user_isTestAccount(phone)) {
			const newToken = tokenEvent.getToken({ phone: phone, smsCode: 1234 }, utils.utils_getSecret(), 300);
			return { code: 0, tk: newToken };
		}
		const { appId } = this.getClientInfo();
		try {
			const res = await uniCloud.sendSms({
				appid: appId,
				phone: phone,
				templateId: '34246',
				data: {
					name: 'DCloud',
					code: smsCode,
					expMinute: '5',
				}
			});
			console.log("发送短信验证结果=====", res);
			const newToken = tokenEvent.getToken({ phone: phone, smsCode: smsCode }, utils.utils_getSecret(), 300);
			return { code: 0, tk: newToken };
		} catch (err) {
			console.log(JSON.stringify(err))
			console.log(err.errMsg)
			throw new Error(err);
		}
	},

	async user_validToken(event) {
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const { $token } = event;
			if (!$token) {
				return { errMode: 9992, errMsg: "" }
			}
			const verifT = utils.utils_verifyToken($token, utils.utils_getSecret());
			if (!verifT) {
				return { errCode: 9990, errMsg: "token已过有效期" }
			}
			const { phone, account, account_id } = verifT.value;
			const sql = `_id=='${account_id+""}'||phone=='${phone+""}'||account=='${account+""}'`
			const userRes = await dbJQL.collection("hm-user").where(sql).get();
			if (userRes.data.length < 1) {
				return { errCode: 9992, errMsg: "账号不存在" }
			}
			if (userRes.data[0]['hm_token'] != $token) {
				return { errCode: 9991, errMsg: "账号已在别外登录" }
			} else {
				return { errCode: 0, errMsg: "" };
			}
		} catch (e) {
			throw new Error("数据异常", e)
		}
	},

	async user_getUser(event) {
		const { type, value } = event;
		if (!type) {
			throw new Error("type 不能为空")
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const field = "_id,isVip,nickName,phone,userName,avatar,closeAccountDateTime,account,email,accountStatus";
		let w = {};
		if (type == 'phone') {
			w = { phone: value };
		}
		if (type == 'token') {
			w = { hm_token: value };
		}
		try {
			const res = await dbJQL.collection("hm-user").where(w).field(field).get();
			const user = res.data[0];
			if (!user) {
				throw new Error("未查到用户信息")
			}
			return user;
		} catch (error) {
			throw new Error('系统异常')
		}
	},

	async user_closeAccount(event) {
		const { $token } = event;
		if (!$token) {
			throw new Error("token不能为空")
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, "****");
			const { phone } = verifyTokenObj.value;
			const time = Date.now();
			const res = await dbJQL.collection("hm-user").where({ phone: phone }).update({ accountStatus: 9, closeAccountDateTime: time });
			return res;
		} catch (e) {
			throw new Error(e)
		}
	},

	async user_checkLogin(event) {
		return event;
	},

	async user_validEmailAndCode(email, emailCode, emailCodeTk) {
		console.log("参数", email, emailCode, emailCodeTk)
		const secret = utils.utils_getSecret();
		const verifT = utils.utils_verifyToken(emailCodeTk, secret);
		console.log('verift', verifT);
		if (!verifT || verifT.value.emailCode != emailCode) {
			return {
				errCode: 202,
				errMsg: "邮箱验证码不正确"
			};
		}
		if (verifT.value.email != email) {
			return {
				errCode: 202,
				errMsg: "邮箱与验证码不匹配"
			};
		}
		return {
			errCode: 0,
			errMsg: ""
		};
	},

	async user_updatePassword(token, password, originPassword) {
		console.log("oooo", originPassword, password);
		if (!password) {
			return {
				errMsg: "新密码不能为空",
				errCode: 102
			};
		}
		const secret = utils.utils_getSecret();
		const verifT = utils.utils_verifyToken(token, secret);
		console.log("verifT::", verifT)
		if (!verifT || !verifT.value.account_id) {
			return {
				errMsg: "验证用户身份失败",
				errCode: 200
			};
		}
		const flag = await this.user_validPasswordIsCorrent(verifT.value.account_id, originPassword);
		if (!flag) {
			return {
				errMsg: "原密码不正确",
				errCode: 103
			};
		}
		const res = await this.user_resetPassword(verifT.value.account_id, password);
		return res;
	},

	async user_resetPasswordByEmailCode(email, emailCode, emailCodeTk, password) {
		try {
			const secret = utils.utils_getSecret();
			const verifT = utils.utils_verifyToken(emailCodeTk, secret);
			console.log('verift', verifT);
			if (!verifT || verifT.value.emailCode != emailCode) {
				return {
					errCode: 202,
					errMsg: "邮箱验证码不正确"
				};
			}
			if (verifT.value.email != email) {
				return {
					errCode: 202,
					errMsg: "邮箱与验证码不匹配"
				};
			}
			const res = await this.user_resetPasswordByEmail(email, password);
			console.log("resetpassword res ", res);
			if (res.updated < 1) {
				return {
					errCode: 404,
					errMsg: "未找到相关账号"
				}
			}
			return res;
		} catch (error) {
			throw new Error(error);
		}
	},

	async user_resetPassword(_id, password) {
		if (!password) {
			return { errCode: 10, errMsg: "密码不能为空" }
		}
		const ep = utils.utils_encryptPassword(password);
		const db = uniCloud.databaseForJQL();
		const res = await db.collection("hm-user").doc(_id).update({ password: ep });
		return res;
	},

	async user_resetPasswordByEmail(email, password) {
		if (!password) {
			return { errCode: 101, errMsg: "密码不能为空" }
		}
		if (!email) {
			return { errCode: 102, errMsg: "邮箱不能为空" }
		}
		const ep = utils.utils_encryptPassword(password);
		const db = uniCloud.databaseForJQL();
		const res = await db.collection("hm-user").where({ email: email }).update({ password: ep });
		return res;
	},

	async user_validPasswordIsCorrent(_id, password) {
		const db = uniCloud.databaseForJQL();
		const user = await db.collection("hm-user").doc(_id).get();
		const ep = utils.utils_encryptPassword(password);
		const psd = user.data[0].password;
		if (psd === "" || psd === null || psd === undefined) {
			return true;
		}
		return psd === ep;
	},

	async user_loginMp(event) {
		const { code } = event;
		const appid = "wx1e656e3fd064719a";
		const secret = '58ddb3617f26ed6bdd4b4117046ae7a8';
		try {
			const resPhone = await uniCloud.callFunction({
				name: "getMpPhoneNumber",
				data: { appid, secret, code }
			});
			console.log("resPhone", resPhone);
			const res = await uniCloud.callFunction({
				name: "hm_login",
				data: {
					client: "MP",
					userForm: { phone: resPhone.result }
				}
			});
			return { code: 0, msg: "", data: { phone: resPhone.result, token: res.result.data.token } };
		} catch (error) {
			throw new Error("登录异常", error)
		}
	},

	user_isTestAccount(phone = "", smsCode) {
		const testAccountList = [{
			phone: "18516285834",
			smsCode: "1234"
		},
		{
			phone: "13122905834",
			smsCode: "1234"
		}
		]
		let t = testAccountList.find(item => item.phone == phone);
		return t ? true : false;
	},

	user_randomSms() {
		let res = '';
		for (var i = 0; i < 4; i++) res += Math.floor(Math.random() * 10);
		return res;
	},

	user_getUser(phone, token) {
		let vipStartDateStamp = new Date().getTime();
		let vipEndDateStamp = new Date().getTime() + 30 * 1000 * 60 * 60 * 24;
		return {
			"idCard": "",
			"vipStartDateStamp": vipStartDateStamp,
			"isVip": true,
			"nickName": "",
			"phone": phone,
			"password": "",
			"userId": phone,
			"userName": `用户${phone.substr(-4)}`,
			"vipEndDate": utils.utils_dateFormat(new Date(vipEndDateStamp), "yyyy-MM-dd HH:mm:ss"),
			"vipEndDateStamp": vipEndDateStamp,
			"vipStartDate": utils.utils_dateFormat(new Date(vipStartDateStamp), "yyyy-MM-dd HH:mm:ss"),
			"wxNickName": "",
			"wxOpenId": "",
			"hm_token": token,
			"avatar": "",
			"blongEmployment": []
		}
	},

	user_formatUser(account, password, email = '') {
		return {
			idCard: "",
			vipStartDateStamp: "",
			isVip: false,
			nickName: "",
			account: account,
			password: password,
			email: email,
			userName: "",
			vipEndDate: "",
			vipEndDateStamp: "",
			closeAccountDateTime: null,
			vipStartDate: "",
			wxNickName: "",
			wxOpenId: "",
			hm_token: "",
			avatar: "",
			accountStatus: 1
		}
	}
}
