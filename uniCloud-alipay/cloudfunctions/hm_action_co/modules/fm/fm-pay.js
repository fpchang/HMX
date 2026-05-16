const utils = require('../utils/index.js');

module.exports = {
	async fm_createPayOrder(event) {
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const { phone } = this._tokenInfo;
			const res = await dbJQL.collection("hm-memberOrder").add({
				phone
			});
			return res;
		} catch (e) {
			throw Error(e);
		}
	}
}