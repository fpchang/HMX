const utils = require('../utils/index.js');

module.exports = {
	async fm_getRechargeConfig(event) {
		const { $token } = event;
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {

			const { phone } = this._tokenInfo;
			const res = await dbJQL.collection("hm-rechargeConfig").where({ phone: phone, status: true }).get();
			return res;
		} catch (e) {
			throw Error(e);
		}
	}
}