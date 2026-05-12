const utils = require('../utils/index.js');
const tokenEvent = require('../../common/tokenEvent/index.js');

module.exports = {
	async fm_getRechargeConfig(event) {
		const { $token } = event;
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, tokenEvent.getSecret());
			const { phone } = verifyTokenObj.value;
			const res = await dbJQL.collection("hm-rechargeConfig").where({ phone: phone, status: true }).get();
			return res;
		} catch (e) {
			throw Error(e);
		}
	}
}