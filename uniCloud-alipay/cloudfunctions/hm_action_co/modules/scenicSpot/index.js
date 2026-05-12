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
	},

	async scenicSpot_addScenicSpotDetail(event) {
		let { scenicSpotDetailObj } = event;
		console.log("scenicSpot_addScenicSpotDetail", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-scenicSpotPriceDetail').add(scenicSpotDetailObj);
		return result;
	},

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
	},

	async scenicSpot_deleteScenicSpotDetail(event) {
		let { _id } = event;
		console.log("scenicSpot_deleteScenicSpotDetail", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-scenicSpotPriceDetail').doc(_id).remove();
		return result;
	},

	async scenicSpot_editScenicSpot(event) {
		let { _id, scenicSpotObj } = event;
		console.log("scenicSpot_editScenicSpot", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-scenicSpot').doc(_id).update(scenicSpotObj);
		return result;
	},

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
