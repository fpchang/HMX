const utils = require('../../utils/index.js');
class UserToken {
	constructor(ctx) {
		this.ctx = ctx;
	}
	async validToken(token) {
		const secret = utils.getSecret();
		const verifyResult = utils.verifyToken(token, secret);
		if (!verifyResult) {
			return {errCode:0,errMsg:"",data:false};
		}
		const {account_id,phone,account} = verifyResult.value;
		const dbJQL = uniCloud.databaseForJQL();
		const db = uniCloud.database();
		const dbcmd = db.command;
		try {

			const userRes = await uniCloud.database().collection("hm-user").where({"_id": account_id}).get();
			if (userRes.data.length < 1) {
				return {
					errCode: 0,
					errMsg: "account is not find",
					data: false
				}
			}
			if (userRes.data[0]['hm_token'] != token) {
				return {
					errCode: 0,
					errMsg: "token is error",
					data: false
				}
			} else {
				return {
					errCode: 0,
					errMsg: "",
					data: true
				};
			}
		} catch (e) {
			throw new Error("system error", e)
		}
	}
	async updateToken() {}
}

module.exports = {
	UserToken
};