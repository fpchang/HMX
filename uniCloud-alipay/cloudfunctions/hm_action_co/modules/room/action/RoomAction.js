const utils = require('../../utils/index.js');
class RoomAction {
	constructor(ctx) {
		this.ctx = ctx;
	}
	async room_addRoom(roomList) {
		const dbJQL = uniCloud.databaseForJQL({
			context: this.ctx.getClientInfo()
		})
		try {
			const result = await dbJQL.collection('hm-room').add(roomList);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
	async room_updateRoom(room) {
		let { _id } = room;
		if (!_id) {
			throw new Error("缺少_id")
		}
		const dbJQL = uniCloud.database();
		const result = await dbJQL.collection('hm-room').doc(_id).update(room);
		return result;
	}
	async getRemainderRoomList(params) {
		let { hotel_id, startTime, endTime } = params;
		startTime = new Date(utils.utils_dateFormat(new Date(startTime), "yyyy/MM/dd") + " 14:00:00").getTime();
		endTime = new Date(utils.utils_dateFormat(new Date(endTime), "yyyy/MM/dd") + " 12:00:00").getTime();
		let jql = `hotel_id=='${hotel_id}'&&orderType=='normal'&&(orderStatus==0||orderStatus==1)&&(` +
			`${endTime}<=checkInEndDateTimeStamp&&${endTime}>checkInStartDateTimeStamp||` +
			`${startTime}>=checkInStartDateTimeStamp&&${endTime}<=checkInEndDateTimeStamp||` +
			`${startTime}>=checkInStartDateTimeStamp&&${startTime}<checkInEndDateTimeStamp||` +
			`${startTime}<=checkInStartDateTimeStamp&&${endTime}>=checkInEndDateTimeStamp)`;
		console.log("参数jql", jql)
		const dbJQL = uniCloud.databaseForJQL({
			context: this.ctx.getClientInfo()
		})
		const roomTypeListRes = await this.roomType_getRoomType({ hotel_id });
		let roomTypeList = roomTypeListRes.data;
		const orderListRes = await dbJQL.collection('hm-order').where(jql).get();
		const roomListRes = await dbJQL.collection('hm-room').where(`hotel_id=='${hotel_id}'`).get();
		const orderList = orderListRes.data;
		const roomList = roomListRes.data;
		let hasUseRoomList = [];
		orderList.forEach(item => {
			let list = item.reservedRoomList || [];
			hasUseRoomList.push(...list);
		});
		hasUseRoomList = new Set(hasUseRoomList);
		let remainRoomList = roomList.filter(item => !hasUseRoomList.has(item._id));
		return remainRoomList;
	}
	async deleteRoom(_id) {
		const db = uniCloud.database();
		const dCmd = db.command;
		const result = await db.collection('hm-room').doc(_id).remove();
		return result;
	}
}
module.exports = {
	RoomAction
};