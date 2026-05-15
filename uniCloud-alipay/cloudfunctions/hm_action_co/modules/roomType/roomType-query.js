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
	}
}