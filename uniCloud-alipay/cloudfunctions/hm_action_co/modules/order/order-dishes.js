module.exports = {
	async order_addOrderDishes(event) {
		let { orderDishesObj } = event;
		console.log("order_addOrderDishes", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-orderDishes').add(orderDishesObj);
		return result;
	},

	async order_deleteOrderDishes(event) {
		let { _id } = event;
		console.log("order_deleteOrderDishes", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-orderDishes').doc(_id).remove();
		return result;
	}
}