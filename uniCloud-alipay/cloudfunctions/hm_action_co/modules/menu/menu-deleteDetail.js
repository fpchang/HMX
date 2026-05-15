module.exports = {
	async menu_deleteMenuDetail(event) {
		let { _id } = event;
		console.log("menu_deleteMenuDetail", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-menuDetail').doc(_id).remove();
		return result;
	}
}