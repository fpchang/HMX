module.exports = {
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
	}
}