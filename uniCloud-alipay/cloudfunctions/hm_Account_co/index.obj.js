// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const tokenEvent = require('tokenEvent');
const {
	RegisterClass
} = require('./register/RegisterClass.js');
const {
	PasswordClass
} = require('./password/PasswordClass.js');
module.exports = {
	_before: function() { // 通用预处理器
		const methodName = this.getMethodName()
	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	async validEmailAndCode(email, emailCode, emailCodeTk) {
	console.log("参数",email, emailCode, emailCodeTk)
		const secret = tokenEvent.getSecret();
		const verifT = tokenEvent.verifyToken(emailCodeTk, secret);
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
	// async validEmailAndCodeRegister(email,emailCode,emailCodeTk){

	// 		const secret = tokenEvent.getSecret();
	// 		const verifT = tokenEvent.verifyToken(emailCodeTk, secret);
	// 			console.log('verift',verifT);
	// 			if (!verifT || verifT.value.emailCode != emailCode) {
	// 				return {errCode : 202,errMsg : "邮箱验证码不正确"};
	// 			}
	// 			if(verifT.value.email!=email){
	// 				return {errCode : 202,errMsg : "邮箱与验证码不匹配"};
	// 			}
	// 			const db = uniCloud.databaseForJQL();
	// 			const res = await db.getCollection("hm-user", {email:email});
	// 			console.log("EEEERRRR",res);
	// 			const data = res['data'];
	// 			if( data.length >0){
	// 				return {errCode : 502,errMsg : "邮箱已经存在"};
	// 			}
	// 		return {errCode : 0,errMsg : "0"};
	// },
	async updatePassword(token, password, originPassword) {
		console.log("oooo", originPassword, password);
		if (!originPassword) {
			return {
				errMsg: "原密码不能为空",
				errCode: 101
			};
		}
		if (!password) {
			return {
				errMsg: "密码不能为空",
				errCode: 102
			};
		}
		const secret = tokenEvent.getSecret();
		const verifT = tokenEvent.verifyToken(token, secret);
		console.log("verifT::", verifT)
		if (!verifT || !verifT.value.account_id) {
			return {
				errMsg: "验证用户身份失败",
				errCode: 200
			};
		}

		const pc = new PasswordClass(verifT.value.account_id);
		const flag = await pc.validPasswordIsCorrent(originPassword);
		if (!flag) {
			return {
				errMsg: "原密码不正确",
				errCode: 103
			};
		}
		const res = await pc.resetPassword(password);
		return res;

	},
	/**
	 * @param {Object} accountObject
	 */
	async resetPasswordByEmailCode(email,emailCode, emailCodeTk, password) {
		try {
			const secret = tokenEvent.getSecret();
			const verifT = tokenEvent.verifyToken(emailCodeTk, secret);
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
			const passwordClass = new PasswordClass();
			const res = await passwordClass.resetPasswordByEmail(email, password);
			console.log("resetpassword res ",res);
			if(res.updated<1){
				return {errCode:404,errMsg:"未找到相关账号"}
			}
			return res;
		} catch (error) {
			throw new Error(error);
		}

	},
	/**
	 * 注册
	 */
	async register(userForm = {}) {
		console.log("userForm", userForm);
		const {
			account,
			email,
			password
		} = userForm;

		const registerClass = new RegisterClass(account, password, email);
		const res = await registerClass.register();
		return res;
	}

}
//表单验证
async function validAccountObject(accountObject) {
	let msg = "";
	const {
		account,
		email,
		emailcode,
		password,
		confirmPassword,
	} = accountObject;
	if (password != confirmPassword) {
		msg = "两次密码不一致";
	}
	if (account == "") {
		msg = "账号不能为空";
	}
	if (emailcode != "5050") {
		msg = "邮箱验证码不正确";
	}
	return msg
}