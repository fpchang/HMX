module.exports = {
	async order_deleteOrder(event) {
		let { _id } = event;
		console.log('order_deleteOrder : ', event)
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		});
		const res = await dbJQL.collection("hm-order").doc(_id).update({ 'orderStatus': 10 });
		return res;
	}
}