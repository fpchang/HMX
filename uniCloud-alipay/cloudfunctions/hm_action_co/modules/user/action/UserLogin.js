const utils = require('../../utils/index.js');
const {UserRegister} = require("./UserRegister.js");
const {isTestAccount} = require("../testUserConfig.js");
class UserLogin{
	constructor(ctx){
		this.ctx= ctx;
	}
	async loginByApp(userForm) {
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
		const secret = utils.getSecret();
		const dbJQL = uniCloud.databaseForJQL({
			clientInfo: this.ctx.getClientInfo()
		});
		try {
			const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			if (userRes.data.length > 0) {
				const user = userRes.data[0];
				const newToken = utils.getToken({
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
			const register = new UserRegister(this.ctx);
			return register.registerByPhone(phone);
		} catch (e) {
			throw new Error(e)
		}
	}
	
	async loginByAccountAndPassword(userForm) {
		const {
			account,
			password
		} = userForm;
		const dbJQL = uniCloud.databaseForJQL({
			clientInfo: this.ctx.getClientInfo()
		});
		const db = uniCloud.database();
		try {
			const ep = utils.encryptPassword(password);
			const secret = utils.getSecret();
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
			const newToken = utils.getToken({
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
	}
	
	async loginBySmsCode(userForm) {
		console.log(111,userForm)
		let {
			smsCode,
			phone,
			tk
		} = userForm;
		const secret = utils.getSecret();
		const dbJQL = uniCloud.databaseForJQL({
	
			clientInfo: this.ctx.getClientInfo(),
	
			event: {
				userForm
			},
			context: this.ctx.getClientInfo()
		});
		const db = uniCloud.database();
		//if (!this.isTestAccount(phone)) {
			const verifT = utils.verifyToken(tk, secret);
			console.log("3333",tk,verifT)
			if (!verifT || verifT.value.smsCode != smsCode) {
				return {
					errCode: 202,
					errMsg: "验证码不正确",
					data: {}
				};
			}
		//}
		try {
			console.log(11111)
			//const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			const userRes = await db.collection('hm-user').where({
				phone
			}).get();
			console.log("userRes", userRes);
			if (userRes.data.length > 0) {
				const user = userRes.data[0];
				const newToken = utils.getToken({
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
			const register =await  new UserRegister(this.ctx).registerByPhone(phone);
			console.log("register===",register);
			return register;
		} catch (e) {
			//throw new Error(e);
			return {
				errCode: 202,
				errMsg: e.errMsg,
				data: {}
			};
		}
	}
	async sendSms(phone,tempType) {
		//let { appid, phone, templateId = 'uni_sms_test' } = event;
		const db = uniCloud.database();
		const smsCode = this.randomSms();
		//console.log("spaceinfo",this.ctx.getClientInfo())
		if (this.ctx.getCloudInfo().spaceId == "env-00jxh1m2dpmq" || isTestAccount(phone)) {
			const newToken =utils.getToken({ phone: phone, smsCode: 1234 }, utils.getSecret(), 300);
			return {errCode:0,errMsg:"", data:{tk: newToken }};
		}
		const { appId } = this.ctx.getClientInfo();
		const tempid = tempType=="updatePhone"?'38664':'34246';
		console.log("tempType===",tempid);
		try {
			const res = await uniCloud.sendSms({
				appid: appId,
				phone: phone,
				templateId: tempid,
				data: {
					name: 'DCloud',
					code: smsCode,
					expMinute: '5',
				}
			});
			console.log("发送短信验证结果=====", res);
			const newToken =utils.getToken({ phone: phone, smsCode: smsCode }, utils.getSecret(), 300);
			return {errMsg:"",errCode:0, data:{ tk: newToken}};
		} catch (err) {
			// console.log(JSON.stringify(err))
			// console.log(err.errMsg)
			// throw new Error(err);
		}
	}
	
	
	
	randomSms() {
		let res = '';
		for (var i = 0; i < 4; i++) res += Math.floor(Math.random() * 10);
		return res;
	}
	
}

module.exports = {UserLogin};