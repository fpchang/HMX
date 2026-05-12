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
	},

	async menu_addMenuType(event) {
		let { menuTypeObj } = event;
		console.log("menu_addMenuType", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuType').add(menuTypeObj);
		return result;
	},

	async menu_deleteMenuDetail(event) {
		let { _id } = event;
		console.log("menu_deleteMenuDetail", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-menuDetail').doc(_id).remove();
		return result;
	},

	async menu_deleteMenuType(event) {
		let { _id } = event;
		console.log("menu_deleteMenuType", event);
		try {
			const db = uniCloud.database();
			await db.collection('hm-menuDetail').where({ menuType_id: _id }).remove();
			const res = await db.collection('hm-menuType').doc(_id).remove();
			return res;
		} catch (e) {
			throw new Error(e)
		}
	},

	async menu_editMenuDetail(event) {
		let { _id, menuDetail } = event;
		console.log("menu_editMenuDetail", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuDetail').doc(_id).update(menuDetail);
		return result;
	},

	async menu_editMenuType(event) {
		let { _id, menuTypeObj } = event;
		console.log("menu_editMenuType", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-menuType').doc(_id).update(menuTypeObj);
		return result;
	},

	async menu_addFeedback(event) {
		let { feedbackObj } = event;
		console.log("menu_addFeedback", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-feedback').add(feedbackObj);
		return result;
	}
}
