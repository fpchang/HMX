module.exports = {
	async room_deleteRoom(event) {
		let { _id } = event;
		console.log("room_deleteRoom", event);
		const db = uniCloud.database();
		try {
			const result = await db.collection('hm-room').doc(_id).remove();
			return { code: 0, message: "" }
		} catch (error) {
			throw new Error("删除失败");
		}
	},

	async room_deleteRoom_x(event) {
		let { _id } = event;
		console.log("room_deleteRoom_x", event);
		const db = uniCloud.database();
		const dCmd = db.command;
		const result = await db.collection('hm-room').doc(_id).remove();
		return result;
	}
}