module.exports = {
	async scenicSpot_deleteScenicSpotDetail(event) {
		let { _id } = event;
		console.log("scenicSpot_deleteScenicSpotDetail", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-scenicSpotPriceDetail').doc(_id).remove();
		return result;
	}
}