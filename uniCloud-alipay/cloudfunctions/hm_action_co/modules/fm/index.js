const utils = require('../utils/index.js');

module.exports = {
	async fm_deleteFm(event) {
		let { _id } = event;
		console.log("fm_deleteFm", event);
		const db = uniCloud.database();
		const dCmd = db.command;
		try {
			const result = await db.collection('hm-incomeAndExpenses').doc(_id).remove();
			return { code: 0, data: [], message: "" };
		} catch (error) {
			throw new Error("删除失败");
		}
	},

	async fm_task(event) {
		console.log('fm_task : ', event)
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const indatetime = new Date(dateFormat(new Date(), "yyyy/MM/dd") + " 14:00:00").getTime();
		const s1 = `checkInStartDateTimeStamp==${indatetime}&&orderStatus==5`;
		try {
			const res = await dbJQL.collection("hm-order").where(s1).groupBy('hotel_id').groupField('sum(totalAmount) as amount').get();
			const re = await db.collection("hm-incomeAndExpenses").where({
				type: "roomRate",
				ioeTime: indatetime
			}).get()
			if (re.data.length > 0) {
				return;
			}
			let arr = res.data.map(item => {
				return {
					hotel_id: item.hotel_id,
					type: "roomRate",
					ioeTime: indatetime,
					amount: item.amount,
					billType: "income",
					mark: "自动任务-房费"
				};
			})
			dbJQL.collection("hm-incomeAndExpenses").add(arr)
		} catch (error) {
			console.log("error", error);
		}
	},

	async fm_createPayOrder(event) {
		const { $token } = event;
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, tokenEvent.getSecret());
			const { phone } = verifyTokenObj.value;
			const res = await dbJQL.collection("hm-memberOrder").add({
				phone
			});
			return res;
		} catch (e) {
			throw Error(e);
		}
	},

	async fm_createRechargeOrder(event) {
		const { $token, rechargeConfig_id } = event;
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, tokenEvent.getSecret());
			const { phone } = verifyTokenObj.value;
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
	},

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
