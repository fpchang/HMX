const utils = require('../utils/index.js');

module.exports = {
	async roomType_addRoomType(event) {
		let { roomTypeObj } = event;
		console.log("roomType_addRoomType", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-roomType').add(roomTypeObj);
		return result;
	},

	async roomType_updateRoomType(event) {
		let { _id, roomTypeObj } = event;
		console.log("roomType_updateRoomType", event);
		if (!_id) {
			return new Promise((resolve, reject) => {
				reject({ errMsg: "缺少_id", errCode: "300" });
			})
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-roomType').doc(_id).update(roomTypeObj);
		return result;
	},

	async roomType_deleteRoomType(event) {
		let { _id } = event;
		console.log("roomType_deleteRoomType", event);
		const db = uniCloud.database();
		const dCmd = db.command;
		const result = await db.collection('hm-roomType').doc(_id._value).remove();
		return result;
	},

	async roomType_deleteRoomType_x(event) {
		let { _id } = event;
		console.log("roomType_deleteRoomType_x", event);
		const db = uniCloud.database();
		const dCmd = db.command;
		const result = await db.collection('hm-roomType').doc(_id).remove();
		return result;
	},

	async roomType_getRoomType(event) {
		let { hotel_id } = event;
		console.log("roomType_getRoomType", event, this.getClientInfo());
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const roomTypeList = await dbJQL.collection('hm-roomType').where(`hotel_id=='${hotel_id}'`).get();
		return roomTypeList;
	},

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
