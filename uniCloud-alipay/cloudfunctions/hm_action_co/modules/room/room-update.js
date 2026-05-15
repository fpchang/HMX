module.exports = {
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
	}
}