module.exports = {
	async fm_deleteFm(_id) {
		const db = uniCloud.database();
		const dCmd = db.command;
		try {
			const res = await db.collection('hm-incomeAndExpenses').doc(_id).remove();
			return res;
		} catch (error) {
			throw new Error("delete fail");
		}
	}
}