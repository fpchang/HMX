module.exports = {
	async order_task(event) {
		console.log('order_task : ', event)
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const timenow = Date.now();
		const s1 = `checkInStartDateTimeStamp<=${timenow-1000*60*60*10}&&orderType=='bargain'`;
		const s2 = `ordetType=='normal'&&payType=='online'&&payStatus==0&&createTime<=${timenow-1000*60*30}`;
		const s3 = `checkInEndDateTimeStamp<=${timenow}&&orderType=='normal'&&orderStatus==1`;
		try {
			dbJQL.collection("hm-order").where(s1).update({ bargainStatus: 9 });
			dbJQL.collection("hm-order").where(s2).update({ payStatus: 9, orderStatus: 10 });
			dbJQL.collection("hm-order").where(s3).update({ orderStatus: 5 });
		} catch (error) {
			console.log("error", error);
		}
	},

	async order_roomListTask(event) {
		console.log('order_roomListTask : ', event)
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const _ = db.command;
		const $ = db.command.aggregate
		try {
			const res = await dbJQL.collection("hm-order").get();
			console.log("res", res);
		} catch (error) {
			console.log("error", error);
		}
	}
}