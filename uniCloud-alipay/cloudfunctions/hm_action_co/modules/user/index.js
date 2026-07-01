// const utils = require('../utils/index.js');
// const userLogin = require('./user-login.js');
// const userRegister = require('./user-register.js');
// const userPassword = require('./user-password.js');
// const userSms = require('./user-sms.js');
// const userToken = require('./user-token.js');
// const userInfo = require('./user-info.js');
// const userValid = require('./user-valid.js');
// const userLoginMp = require('./user-loginMp.js');
// const userAdd = require('./user-add.js');

// module.exports = {
// 	...userLogin,
// 	...userRegister,
// 	...userPassword,
// 	...userSms,
// 	...userToken,
// 	...userInfo,
// 	...userValid,
// 	...userLoginMp,
// 	...userAdd
// }
const {UserLogin} = require("./action/UserLogin.js");
const {UserRegister} = require("./action/UserRegister.js");
const {UserAction} = require("./action/UserAction.js");
const {UserPassword} = require("./action/UserPassword.js");
const {UserToken} = require("./action/UserToken.js");
const {UserPermission} = require("./action/UserPermission.js");

module.exports = {
	//token验证
	async user_validToken(token){		 
		return await new UserToken(this).validToken(token);
	},
	//账号密码登录
	async user_loginByAccountAndPassword(userForm){
		return await new UserLogin(this).loginByAccountAndPassword(userForm);
	},
	//短信验证码登录
	async user_loginBySmsCode(userForm){
		return await new UserLogin(this).loginBySmsCode(userForm);
	},
	//一键登录
	async user_loginByApp(userForm){
		return await new UserLogin(this).loginByApp(userForm);
	},
	//账号注册验证邮件与验证码
	async user_validEmailAndCode(email,emailCode,emailCodeTk){
		return await new UserRegister(this).validEmailAndCode(email,emailCode,emailCodeTk);
	},
	// 账号注册
	async user_register(user){
		return await new UserRegister(this).register(user);
	},
	//修改密码
	async user_updatePassword(password,originPassword){
		return await new UserPassword(this).updatePassword(password,originPassword);
	},
	//根据token获取用户信息
	async user_getUser(){
		return await new UserAction(this).getUser();
	},
	async user_validUpdatePhone(phone){
		return await new UserAction(this).validUpdatePhone(phone);
	},
	async user_updateEmail(email, emailCode, emailCodeTk){
		return await new UserAction(this).updateEmail(email,emailCode, emailCodeTk);
	},
	async user_updatePhone(userForm){
		return await new UserAction(this).updatePhone(userForm);
	},
	//邮箱验证码重置密码
	async user_resetPasswordByEmailCode(email,emailCode, emailCodeTk, password){
		return await  new UserPassword(this).resetPasswordByEmailCode(email,emailCode, emailCodeTk, password);
	},
	async user_sendSms(phone){
		return  await new UserLogin(this).sendSms(phone);
	},
	async user_closeAccount(){
		return  await new UserAction(this).closeAccount();
	},
	async user_getPermission(hotel_id){
		return await new UserPermission(this).getPermission(hotel_id)
	}
}