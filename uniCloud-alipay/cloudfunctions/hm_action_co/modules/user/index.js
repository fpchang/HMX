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
module.exports = {
	//token验证
	async user_validToken(token){		 
		return new UserToken(this).validToken(token);
	},
	//账号密码登录
	async user_loginByAccountAndPassword(userForm){
		return new UserLogin(this).loginByAccountAndPassword(userForm);
	},
	//短信验证码登录
	async user_loginBySmsCode(userForm){
		return new UserLogin(this).loginBySmsCode(userForm);
	},
	//一键登录
	async user_loginByApp(userForm){
		return new UserLogin(this).loginByApp(userForm);
	},
	//账号注册验证邮件与验证码
	async user_validEmailAndCode(email,emailCode,emailCodeTk){
		return new UserRegister(this).validEmailAndCode(email,emailCode,emailCodeTk);
	},
	// 账号注册
	async user_register(user){
		return new UserRegister(this).register(user);
	},
	//修改密码
	async user_updatePassword(password,originPassword){
		return new UserPassword(this).updatePassword(password,originPassword);
	},
	//根据token获取用户信息
	async user_getUser(){
		console.log("111111",this)
		return new UserAction(this).getUser();
	},
	//邮箱验证码重置密码
	async user_resetPasswordByEmailCode(email,emailCode, emailCodeTk, password){
		return new UserPassword(this).resetPasswordByEmailCode(email,emailCode, emailCodeTk, password);
	},
}