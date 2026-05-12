module.exports = {
	async order_getOrderList(event) {
		const hotel = require("../hotel/index.js");
		return await hotel.hotel_getList();
	},

	async order_addOrder(event) {
		let { orderObj } = event;
		console.log("order_addOrder", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		if (!orderObj['reservedRoomList'] || orderObj['reservedRoomList'].length < 1) {
			orderObj.reservedRoomList = this.order_getRoomList(orderObj.roomTypeArray);
		}
		const result = await dbJQL.collection('hm-order').add(orderObj);
		return result;
	},

	async order_deleteOrder(event) {
		let { _id } = event;
		console.log('order_deleteOrder : ', event)
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		const res = await dbJQL.collection("hm-order").doc(_id).update({ 'orderStatus': 10 });
		return res;
	},

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
	},

	async order_addOrderDishes(event) {
		let { orderDishesObj } = event;
		console.log("order_addOrderDishes", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-orderDishes').add(orderDishesObj);
		return result;
	},

	async order_deleteOrderDishes(event) {
		let { _id } = event;
		console.log("order_deleteOrderDishes", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-orderDishes').doc(_id).remove();
		return result;
	},

	order_getRoomList(roomTypeList = []) {
		let roomlist = roomTypeList.map(rt => rt.roomList || []);
		roomlist = roomlist.flat();
		return roomlist;
	}
}
