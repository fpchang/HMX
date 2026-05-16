const utils = require('../utils/index.js');

module.exports = {
	async fm_createRechargeOrder(event) {
		const { rechargeConfig_id } = event;
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const { phone } = this._tokenInfo;
			const res = await dbJQL.collection("hm-rechargeOrder").add({
				phone,
				rechargeConfig_id
			});
			let order_id = res.id;
			let configRes = await db.collection("hm-rechargeConfig").where({ _id: rechargeConfig_id }).get();
			let options = {
				total_fee: configRes.data[0].price * 100,
				type: "recharge",
				order_no: order_id,
				description: "vip订阅充值",
			};
			let optionsStr = encodeURI(JSON.stringify(options));
			return { code: 0, optionsStr: optionsStr };
		} catch (e) {
			throw Error(e);
		}
	}
}