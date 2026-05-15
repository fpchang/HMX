module.exports = {
	async employee_deleteEmployee(event) {
		let { _id, employee } = event;
		console.log("employee_deleteEmployee", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-employee').doc(_id).remove();
		return result;
	}
}