module.exports = {
	async menu_editMenuType(event) {
		let { _id, menuTypeObj } = event;
		console.log("menu_editMenuType", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuType').doc(_id).update(menuTypeObj);
		return result;
	}
}