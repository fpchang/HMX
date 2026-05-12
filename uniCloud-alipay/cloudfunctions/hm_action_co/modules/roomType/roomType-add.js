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
	}
}