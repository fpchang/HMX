module.exports = {
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
	async getRoomTypeIncludeRoomList(hotelId){
		// 在云对象的方法中
		const dbJQL = uniCloud.databaseForJQL({
		  clientInfo: this.getClientInfo()
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
}
