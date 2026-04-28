const {
	encryptPassword
} = require('encryptPassword');
const {RegisterByPhoneAction} = require("../register/RegisterByPhoneAction.js");
const tokenEvent = require('tokenEvent');
class LoginAction{
	constructor() {
	    
	}
	/**
	 * @param {Object} account 账号，邮箱，手机号
	 * @param {Object} password 密码
	 */
	async loginByAccountAndPassword(userForm){
		const {
				account,
				password
			} = userForm;
			const dbJQL = uniCloud.databaseForJQL();
			try {
				const ep = encryptPassword(password);
				const secret = tokenEvent.getSecret();
				// const w = {
				// 	account: account,
				// 	password: password
				// }
				const wstr=`(account=='${account}'||email=='${account}'||phone=='${account}')&&password=='${ep}'`;
				console.log(wstr)
				const userRes = await dbJQL.collection('hm-user').where(wstr).get();
				console.log("uuuu", userRes);
				if (userRes.data.length <1) {
					//throw new Error("账号密码不正确")
					return {errCode : 1,errMsg : "账号密码不正确"};
				}
					const user = userRes.data[0];
					//更新token
					const newToken = tokenEvent.getToken({
						phone: user.phone,
						account: user.account,
						account_id:user._id
					}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
					const upuserRes = await dbJQL.collection('hm-user').doc(user._id).update({
						'hm_token': newToken
					});
					//user.hm_token = newToken;
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
	async loginByApp(userForm){
		const {accessToken,openid} =userForm;
		console.log("app 一键登录",userForm);
			const res = await uniCloud.getPhoneNumber({
				appid: '__UNI__6CB5534', // 替换成自己开通一键登录的应用的DCloud appid
				provider: 'univerify',
				access_token: accessToken,
				openid: openid
			})
		
			console.log("换到的手机号", res); // res里包含手机号
			const phone = res.phoneNumber;
			const secret = tokenEvent.getSecret();
			const dbJQL = uniCloud.databaseForJQL();
			try {
				const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
				if (userRes.data.length > 0) {
					const user = userRes.data[0];
					//更新token
					const newToken = tokenEvent.getToken({
						phone: phone,
						account: user.account,
						account_id:user._id
					}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
					const upuserRes = await dbJQL.collection('hm-user').doc(user._id).update({
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
				//注册
				//return register(phone)
				const registerClass = new RegisterByPhoneAction();
				return registerClass.registerByPhone(phone);
			} catch (e) {
				throw new Error(e)
				
			}
	}
	async loginBySmsCode(userForm){
		return {errCode:0,errMsg:""}
	}
	
}
module.exports = {LoginAction};