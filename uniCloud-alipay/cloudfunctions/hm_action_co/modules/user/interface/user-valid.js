const utils = require('../utils/index.js');

module.exports = {
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
	}
}