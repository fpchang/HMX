module.exports = {
	async menu_addMenuType(event) {
		let { menuTypeObj } = event;
		console.log("menu_addMenuType", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuType').add(menuTypeObj);
		return result;
	}
}