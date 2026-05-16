const utils = require('../utils/index.js');

module.exports = {
	async hotel_getHotelList(params) {
		console.log("$t2",this.$t);
		console.log("thistoken",this._tokenInfo);
		const dbJQL = uniCloud.databaseForJQL();
		try {
			const { phone, account, account_id } = this._tokenInfo;
			if (!phone && !account && !account_id) {
				throw new Error("无有效用户信息");
			}
			let sql = `account_id=='${account_id+""}'`;
			if (!account_id) {
				sql = phone ? `phone=='${phone+""}'` : `account=='${account+""}'`;
			}
			console.log('sql', sql);
			const emTemp = dbJQL.collection("hm-employee").where(sql).getTemp();
			const hoTemp = dbJQL.collection("hm-hotel").where("dataStatus!=10").getTemp();
			const res = await dbJQL.collection(emTemp, hoTemp).get();
			res.data = hotel_formatHotelToArray(res.data);
			return res;
		} catch (e) {
			throw new Error(e)
		}
	}

}

function hotel_formatHotelToArray(list = []) {
	let arr = [];
	list.map(item => {
		if (item.hotel_id && item.hotel_id[0]) {
			item.hotel_id[0].curRole = item.role;
			arr.push(item.hotel_id[0]);
		}
	})
	return arr;
}