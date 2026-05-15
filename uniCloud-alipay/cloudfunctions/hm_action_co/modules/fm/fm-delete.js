module.exports = {
	async fm_deleteFm(event) {
		let { _id } = event;
		console.log("fm_deleteFm", event);
		const db = uniCloud.database();
		const dCmd = db.command;
		try {
			const result = await db.collection('hm-incomeAndExpenses').doc(_id).remove();
			return { code: 0, data: [], message: "" };
		} catch (error) {
			throw new Error("删除失败");
		}
	}
}