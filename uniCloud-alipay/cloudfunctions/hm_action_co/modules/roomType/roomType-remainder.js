const utils = require('../utils/index.js');

module.exports = {
	async roomType_getRemainderRoomType(event) {
		console.log('roomType_getRemainderRoomType : ', event);
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
		let orderRoomList = orderListRes.data, roomList = roomListRes.data;
		console.log("yyyy2", orderRoomList);
		console.log("房间列表", roomListRes)
		let remainList = roomTypeList.map(item => {
			let hasUseRoomList = [];
			for (const it of orderRoomList) {
				let is = it.roomTypeArray.find(i => { return i.roomType_id == item._id });
				if (is) {
					console.log("找到已经用了的订单", it, item)
					is['roomList'] && hasUseRoomList.push(...is.roomList);
					continue;
				}
			}
			hasUseRoomList = new Set([...hasUseRoomList]);
			let roomByRoomTypeArr = roomList.filter(i => i.room_type_id == item._id);
			item.remainRoomList = roomByRoomTypeArr.filter(i => !hasUseRoomList.has(i._id));
			item.remainCount = Math.max(roomByRoomTypeArr.length - hasUseRoomList.size, 0);
			return item;
		})
		console.log("yyy222", remainList);
		return remainList.filter(item => item.remainCount > 0);
	}
}