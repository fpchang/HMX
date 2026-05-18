module.exports = {
	async order_addOrder(orderObj) {
		console.log("order_addOrder", orderObj);
		const dbJQL = uniCloud.databaseForJQL();
		if (!orderObj['reservedRoomList'] || orderObj['reservedRoomList'].length < 1) {
			orderObj.reservedRoomList = this.order_getRoomList(orderObj.roomTypeArray);
		}
		const result = await dbJQL.collection('hm-order').add(orderObj);
		return result;
	},

	order_getRoomList(roomTypeList = []) {
		let roomlist = roomTypeList.map(rt => rt.roomList || []);
		roomlist = roomlist.flat();
		return roomlist;
	}
}