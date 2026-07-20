module.exports = {
	async scenicSpot_addScenicSpotDetail(event) {
		let { scenicSpotDetailObj } = event;
		console.log("scenicSpot_addScenicSpotDetail", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-scenicSpotPriceDetail').add(scenicSpotDetailObj);
		return result;
	}
}