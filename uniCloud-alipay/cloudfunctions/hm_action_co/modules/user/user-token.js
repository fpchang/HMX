const utils = require('../utils/index.js');

module.exports = {
	async user_validToken(event) {
		console.log("111",event)
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
	}
}