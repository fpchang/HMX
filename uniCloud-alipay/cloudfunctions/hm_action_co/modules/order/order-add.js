module.exports = {
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

	order_getRoomList(roomTypeList = []) {
		let roomlist = roomTypeList.map(rt => rt.roomList || []);
		roomlist = roomlist.flat();
		return roomlist;
	}
}