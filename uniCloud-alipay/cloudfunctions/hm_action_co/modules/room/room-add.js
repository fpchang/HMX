module.exports = {
	async room_addRoom(event) {
		let { roomList } = event;
		console.log("room_addRoom", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const result = await dbJQL.collection('hm-room').add(roomList);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
}