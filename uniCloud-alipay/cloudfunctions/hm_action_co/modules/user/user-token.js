const utils = require('../utils/index.js');

module.exports = {
	async user_validToken() {
		console.log("111112221")
		const dbJQL = uniCloud.databaseForJQL();
		try {
			const token = uniCloud.gett
			const { phone, account, account_id } = this._tokenInfo;
			const sql = `_id=='${account_id+""}'||phone=='${phone+""}'||account=='${account+""}'`
			const userRes = await dbJQL.collection("hm-user").where(sql).get();
			console.log("userRes",userRes)
			if (userRes.data.length < 1) {
				return { errCode: 9992, errMsg: "账号不存在" }
			}
			if (userRes.data[0]['hm_token'] != this.$token) {
				return { errCode: 9991, errMsg: "账号已在别外登录" }
			} else {
				return { errCode: 0, errMsg: "",data:true };
			}
		} catch (e) {
			throw new Error("数据异常", e)
		}
	}
}