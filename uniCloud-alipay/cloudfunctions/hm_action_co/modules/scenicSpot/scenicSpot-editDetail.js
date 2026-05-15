module.exports = {
	async scenicSpot_editScenicSpotDetail(event) {
		let { _id, scenicSpotPriceDetail } = event;
		console.log("scenicSpot_editScenicSpotDetail", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-scenicSpotPriceDetail').doc(_id).update(scenicSpotPriceDetail);
		return result;
	}
}