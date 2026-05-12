module.exports = {
	async scenicSpot_deleteScenicSpot(event) {
		let { _id } = event;
		console.log("scenicSpot_deleteScenicSpot", event);
		const db = uniCloud.database();
		const ta = await db.startTransaction();
		try {
			const ssd = await db.collection('hm-scenicSpotPriceDetail').where({ scenicSpot_id: _id }).remove();
			const ss = await db.collection('hm-scenicSpot').doc(_id).remove();
			ta.commit();
			return result;
		} catch (e) {
			console.error(e);
			ta.rollback();
		}
	}
}