module.exports = {
	async menu_addMenuDetail(event) {
		let { menuDetailObj } = event;
		console.log("menu_addMenuDetail", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuDetail').add(menuDetailObj);
		return result;
	}
}