module.exports = {
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
	}
}