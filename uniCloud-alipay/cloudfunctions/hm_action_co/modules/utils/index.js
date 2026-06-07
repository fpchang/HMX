const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = {
	// ==================== dateFormat ====================
	dateFormat(d, fmt) {
		let o = {
			"M+": d.getMonth() + 1,
			"d+": d.getDate(),
			"H+": d.getHours(),
			"m+": d.getMinutes(),
			"s+": d.getSeconds(),
			S: d.getMilliseconds()
		};
		for (var k in /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length))), o)
			new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
		return fmt
	},

	// ==================== encryptPassword ====================
	encryptPassword(password) {
		const salt = '****';
		const hash = crypto.createHmac('sha256', salt)
			.update(password)
			.digest('hex');
		return hash;
	},

	// ==================== tokenEvent ====================
	getToken(value, secret, expiresIn) {
		return jwt.sign({ value }, secret, { expiresIn })
	},

	verifyToken(token, secret) {
		try {
			return jwt.verify(token, secret);
		} catch (error) {
			return null;
		}
	},

	getSecret() {
		return "****";
	},

	checkToken(token, secret) {
		let vt = this.verifyToken(token, secret);
		if (!vt) return false;
		if (new Date().getTime() > vt.exp * 1000) {
			return false;
		}
		return true;
	},

	// ==================== errorEvent ====================
	getTokenError(msg = "token无效") {
		return { code: 9999, msg: msg }
	},
	//获取客户端语言
	getLanuage(clientInfo){
		 // const sys = uni.getSystemInfoSync();
		 // const clientInfo = this.getClientInfo();
		  const appLanguage = clientInfo.appLanguage;
		  let local='zh-CN';
		 if(appLanguage!=null&&!appLanguage.includes('zh')){
			 local='en-US';
		 }
		 
		//  i18n.global.locale.value = local;
		return local;
	}
}
