const utils = require('../utils/index.js');
const register = require("./user-register.js");
module.exports = {


	async user_loginByApp(userForm) {
		console.log("app 一键登录", userForm);
		const {
			accessToken,
			openid
		} = userForm;
		const res = await uniCloud.getPhoneNumber({
			appid: '__UNI__6CB5534',
			provider: 'univerify',
			access_token: accessToken,
			openid: openid
		})
		console.log("换到的手机号", res);
		const phone = res.phoneNumber;
		const secret = utils.utils_getSecret();
		const dbJQL = uniCloud.databaseForJQL({
			clientInfo: this.getClientInfo()
		});
		try {
			const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			if (userRes.data.length > 0) {
				const user = userRes.data[0];
				const newToken = utils.utils_getToken({
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
			return register.user_registerByPhone(phone);
		} catch (e) {
			throw new Error(e)
		}
	},

	async user_loginByAccountAndPassword(userForm) {
		const {
			account,
			password
		} = userForm;
		const dbJQL = uniCloud.databaseForJQL({
			clientInfo: this.getClientInfo()
		});
		const db = uniCloud.database();
		try {
			const ep = utils.utils_encryptPassword(password);
			const secret = utils.utils_getSecret();
			// const wstr = `(account=='${account}'||email=='${account}'||phone=='${account}')&&password=='${ep}'`;
			// console.log(wstr)
			// const userRes = await dbJQL.collection('hm-user').where(wstr).get();
			const w = {
				$and: [{
						$or: [{
								account: account
							}, // 这里的 account 是变量
							{
								email: account
							},
							{
								phone: account
							}
						]
					},
					{
						password: ep
					} // ep 是变量
				]
			};
			 const userRes = await db.collection('hm-user').where(w).get();
			console.log("uuuu", userRes);
			if (userRes.data.length < 1) {
				return {
					errCode: 1,
					errMsg: "账号密码不正确"
				};
			}
			const user = userRes.data[0];
			const newToken = utils.utils_getToken({
				phone: user.phone,
				account: user.account,
				account_id: user._id
			}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
			await db.collection('hm-user').doc(user._id).update({
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
		let {
			smsCode,
			phone,
			tk
		} = userForm;
		const secret = utils.utils_getSecret();
		const dbJQL = uniCloud.databaseForJQL({

			clientInfo: this.getClientInfo(),

			event: {
				userForm
			},
			context: this.getClientInfo()
		});
		const db = uniCloud.database();
		if (!user_isTestAccount(phone)) {
			const verifT = utils.utils_verifyToken(tk, secret);
			if (!verifT || verifT.value.smsCode != smsCode) {
				return {
					errCode: 202,
					errMsg: "验证码不正确",
					data: {}
				};
			}
		}
		try {
			console.log(11111)
			//const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			const userRes = await db.collection('hm-user').where({
				phone
			}).get();
			console.log("userRes", userRes);
			if (userRes.data.length > 0) {
				const user = userRes.data[0];
				const newToken = utils.utils_getToken({
					phone: user.phone,
					account: user.account,
					account_id: user._id
				}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
				// await dbJQL.collection('hm-user').doc(user._id).update({
				// 	'hm_token': newToken
				// });
				await db.collection('hm-user').doc(user._id).update({
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
			return await register.user_registerByPhone(phone)
		} catch (e) {
			//throw new Error(e);
			return {
				errCode: 202,
				errMsg: e.errMsg,
				data: {}
			};
		}
	},
	// async user_login(userForm) {
	// 	console.log('user_login : ', userForm);
	// 	console.log("this",this)
	// 	let {
	// 		loginType
	// 	} = userForm;
	// 	if (loginType === 'app') {
	// 		return  this.user_loginByApp(userForm);
	// 	}
	// 	if (loginType === 'account') {
	// 		return  this.user_loginByAccountAndPassword(userForm)
	// 	}
	// 	return  this.user_loginBySmsCode(userForm);
	// }
}

function user_isTestAccount(phone = "", smsCode) {
	const testAccountList = [{
			phone: "18516285834",
			smsCode: "1234"
		},
		{
			phone: "13122905834",
			smsCode: "1234"
		},
		{
			phone: "19083441181",
			smsCode: "1234"
		}
	]
	let t = testAccountList.find(item => item.phone == phone);
	return t ? true : false;
}