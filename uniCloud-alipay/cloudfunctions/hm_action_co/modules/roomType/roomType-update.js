module.exports = {
	async roomType_updateRoomType(event) {
		let { _id, roomTypeObj } = event;
		console.log("roomType_updateRoomType", event);
		if (!_id) {
			return new Promise((resolve, reject) => {
				reject({ errMsg: "缺少_id", errCode: "300" });
			})
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-roomType').doc(_id).update(roomTypeObj);
		return result;
	}
}