module.exports = {
	async menu_editMenuDetail(event) {
		let { _id, menuDetail } = event;
		console.log("menu_editMenuDetail", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuDetail').doc(_id).update(menuDetail);
		return result;
	}
}