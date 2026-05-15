module.exports = {
	async scenicSpot_addScenicSpot(event) {
		let { scenicSpotObj } = event;
		console.log("scenicSpot_addScenicSpot", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-scenicSpot').add(scenicSpotObj);
		return result;
	}
}