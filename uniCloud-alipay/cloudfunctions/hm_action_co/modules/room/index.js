const utils = require('../utils/index.js');

module.exports = {
	async room_addRoom(event) {
		let { roomList } = event;
		console.log("room_addRoom", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const result = await dbJQL.collection('hm-room').add(roomList);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	},

	async room_updateRoom(event) {
		let { _id, roomObj } = event;
		console.log("room_updateRoom", event);
		if (!_id) {
			throw new Error("缺少_id")
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-room').doc(_id).update(roomObj);
		return result;
	},

	async room_deleteRoom(event) {
		let { _id } = event;
		console.log("room_deleteRoom", event);
		const db = uniCloud.database();
		try {
			const result = await db.collection('hm-room').doc(_id).remove();
			return { code: 0, message: "" }
		} catch (error) {
			throw new Error("删除失败");
		}
	},

	async room_deleteRoom_x(event) {
		let { _id } = event;
		console.log("room_deleteRoom_x", event);
		const db = uniCloud.database();
		const dCmd = db.command;
		const result = await db.collection('hm-room').doc(_id).remove();
		return result;
	},

	async room_getRemainderRoomList(event) {
		console.log('room_getRemainderRoomList : ', event);
		let { hotel_id, startTime, endTime } = event;
		startTime = new Date(utils.utils_dateFormat(new Date(startTime), "yyyy/MM/dd") + " 14:00:00").getTime();
		endTime = new Date(utils.utils_dateFormat(new Date(endTime), "yyyy/MM/dd") + " 12:00:00").getTime();
		let jql = `hotel_id=='${hotel_id}'&&orderType=='normal'&&(orderStatus==0||orderStatus==1)&&(` +
			`${endTime}<=checkInEndDateTimeStamp&&${endTime}>checkInStartDateTimeStamp||` +
			`${startTime}>=checkInStartDateTimeStamp&&${endTime}<=checkInEndDateTimeStamp||` +
			`${startTime}>=checkInStartDateTimeStamp&&${startTime}<checkInEndDateTimeStamp||` +
			`${startTime}<=checkInStartDateTimeStamp&&${endTime}>=checkInEndDateTimeStamp)`;
		console.log("参数jql", jql)
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const roomTypeListRes = await this.roomType_getRoomType({ hotel_id });
		let roomTypeList = roomTypeListRes.data;
		console.log("YYYY11", roomTypeList);
		const orderListRes = await dbJQL.collection('hm-order').where(jql).get();
		const roomListRes = await dbJQL.collection('hm-room').where(`hotel_id=='${hotel_id}'`).get();
		const orderList = orderListRes.data;
		const roomList = roomListRes.data;
		console.log("yyyy2", orderList);
		console.log("房间列表", roomListRes);
		let hasUseRoomList = [];
		orderList.forEach(item => {
			let list = item.reservedRoomList || [];
			hasUseRoomList.push(...list);
		});
		hasUseRoomList = new Set(hasUseRoomList);
		let remainRoomList = roomList.filter(item => !hasUseRoomList.has(item._id));
		return remainRoomList;
	}
}
