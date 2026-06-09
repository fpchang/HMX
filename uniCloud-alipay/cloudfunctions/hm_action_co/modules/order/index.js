const orderAdd = require('./order-add.js');
const orderDelete = require('./order-delete.js');
const orderTask = require('./order-task.js');
const orderDishes = require('./order-dishes.js');
const orderQuery = require('./order-query.js');

const {OrderAction} = require('./action/OrderAction.js');
module.exports = {
	// ...orderAdd,
	// ...orderDelete,
	// ...orderTask,
	// ...orderDishes,
	// ...orderQuery
	async order_addOrder(orderObj){
		return await new OrderAction(this).addOrder(orderObj);
	},
	async order_deleteOrder(_id){
		return await new OrderAction(this).deleteOrder(_id);
	}
}