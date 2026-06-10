const utils = require('../../utils/index.js');
class RoomTypeAction {
	constructor(ctx) {
		this.ctx = ctx;
	}
	async addRoomType(roomTypeObj) {
		const dbJQL = uniCloud.databaseForJQL({
			context: this.ctx.getClientInfo()
		});
		
		const result = await dbJQL.collection('hm-roomType').add(roomTypeObj);
		console.log("roomtype add 2222",result)
		return result;
	}
	async deleteRoomType(_id) {
		const db = uniCloud.database();
		const dCmd = db.command;
		const result = await db.collection('hm-roomType').doc(_id).remove();
		return result;
	}
	async updateRoomType(roomTypeObj) {
		const {
			_id
		} = roomTypeObj;
		if (!_id) {
			return new Promise((resolve, reject) => {
				reject({
					errMsg: "缺少_id",
					errCode: "300"
				});
			})
		}
		const db = uniCloud.databaseForJQL();
		return await db.collection('hm-roomType').doc(_id).update(roomTypeObj);
		

		
	}
	async getRoomType(hotel_id) {
		const dbJQL = uniCloud.databaseForJQL({
			context: this.ctx.getClientInfo()
		})
		const roomTypeList = await dbJQL.collection('hm-roomType').where(`hotel_id=='${hotel_id}'`).get();
		return roomTypeList;
	}
	async getRoomTypeIncludeRoomList(hotelId) {
		// 在云对象的方法中
		const dbJQL = uniCloud.databaseForJQL({
			clientInfo: this.ctx.getClientInfo()
		});

		const roomTypeTemp = dbJQL.collection('hm-roomType')
			.where(`hotel_id == "${hotelId}"`) // 过滤条件
			//  .field('_id, name, price, area')   // 指定需要返回的房型字段
			.getTemp(); // 这里使用了 .getTemp()，返回的是一个临时表，而不是实际数据

		// 2. 将副表 'hm-room' 也创建为一个临时表
		const roomTemp = dbJQL.collection('hm-room')
			//  .field('_id, room_type_id, roomNo, status') // 字段中必须包含关联的外键
			.getTemp();

		// 3. 将两个临时表组合进行联表查询
		const res = await dbJQL.collection(roomTypeTemp, roomTemp)
			.get();
		return res;
	}
	async getRemainderRoomType(params) {
		console.log('roomType_getRemainderRoomType : ', params);
		let {
			hotel_id,
			startTime,
			endTime
		} = params;
		startTime = new Date(utils.utils_dateFormat(new Date(startTime), "yyyy/MM/dd") + " 14:00:00").getTime();
		endTime = new Date(utils.utils_dateFormat(new Date(endTime), "yyyy/MM/dd") + " 12:00:00").getTime();
		let jql = `hotel_id=='${hotel_id}'&&orderType=='normal'&&(orderStatus==0||orderStatus==1)&&(` +
			`${endTime}<=checkInEndDateTimeStamp&&${endTime}>checkInStartDateTimeStamp||` +
			`${startTime}>=checkInStartDateTimeStamp&&${endTime}<=checkInEndDateTimeStamp||` +
			`${startTime}>=checkInStartDateTimeStamp&&${startTime}<checkInEndDateTimeStamp||` +
			`${startTime}<=checkInStartDateTimeStamp&&${endTime}>=checkInEndDateTimeStamp)`;
		console.log("参数jql", jql)
		const dbJQL = uniCloud.databaseForJQL({
			params,
			context: this.ctx.getClientInfo()
		})
		const roomTypeListRes = await this.roomType_getRoomType({
			hotel_id
		});
		let roomTypeList = roomTypeListRes.data;
		console.log("YYYY11", roomTypeList);
		const orderListRes = await dbJQL.collection('hm-order').where(jql).get();
		const roomListRes = await dbJQL.collection('hm-room').where(`hotel_id=='${hotel_id}'`).get();
		let orderRoomList = orderListRes.data,
			roomList = roomListRes.data;
		console.log("yyyy2", orderRoomList);
		console.log("房间列表", roomListRes)
		let remainList = roomTypeList.map(item => {
			let hasUseRoomList = [];
			for (const it of orderRoomList) {
				let is = it.roomTypeArray.find(i => {
					return i.roomType_id == item._id
				});
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
module.exports = {
	RoomTypeAction
};