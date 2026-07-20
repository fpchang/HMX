module.exports = {
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
	}
}