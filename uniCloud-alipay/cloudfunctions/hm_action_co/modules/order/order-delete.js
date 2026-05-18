module.exports = {
	async order_deleteOrder(_id) {
		const dbJQL = uniCloud.databaseForJQL();
		const res = await dbJQL.collection("hm-order").doc(_id).update({ 'orderStatus': 10 });
		return res;
	}
}