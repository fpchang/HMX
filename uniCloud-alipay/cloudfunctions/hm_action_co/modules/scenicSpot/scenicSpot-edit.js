module.exports = {
	async scenicSpot_editScenicSpot(event) {
		let { _id, scenicSpotObj } = event;
		console.log("scenicSpot_editScenicSpot", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-scenicSpot').doc(_id).update(scenicSpotObj);
		return result;
	}
}