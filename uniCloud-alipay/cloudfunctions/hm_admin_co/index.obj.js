// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	/**
	 * this._tokenInfo:解析的token
	 * this.$t 国际化对象
	 */
	_before: function() {
		const clientInfo = this.getClientInfo();
		const lang = utils.getLanuage(clientInfo);
		console.log('客户端语言', lang,clientInfo);
		this.$t = getI18nMsg(lang);
		const methodName = this.getMethodName();
		console.log("方法", methodName);
		if (!methodList.includes(methodName)) {
			const params = this.getParams();
			try {
				const token = clientInfo.hm_token;
				if (!token) {
					throw new Error("token is incorrect");

				}
				const secret = utils.getSecret();
				const verifyResult = utils.verifyToken(token, secret);
				if (verifyResult) {
					console.log("设置token", verifyResult.value, token);
					this._tokenInfo = verifyResult.value;
					this.$token = token;
				}
			} catch (error) {
				throw error;
			}




		}
	},
	preHeat() {
		console.log("preheat",this.getClientInfo());
		// const clientinfo = this.getClientInfo();
		// const db = uniCloud.databaseForJQL();
		// const obj ={
		// 	function_no:'hm001',
		// 	//createTime:new Date().getTime(),
		// 	deviceModel:clientinfo.deviceModel,
		// 	deviceType:clientinfo.deviceType,
		// 	deviceId:clientinfo.deviceId,
		// 	osName:clientinfo.osName,
		// 	osVersion:clientinfo.osVersion,
		// 	appVersion:clientinfo.appVersion
			
		// }
		// db.collection("hm-feature_statistics").add(obj)
		// return {
		// 	errCode: 0,
		// 	errMsg: "",
		// 	data: 1
		// }
	}
}
