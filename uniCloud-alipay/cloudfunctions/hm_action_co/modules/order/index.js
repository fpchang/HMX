const orderAdd = require('./order-add.js');
const orderDelete = require('./order-delete.js');
const orderTask = require('./order-task.js');
const orderDishes = require('./order-dishes.js');
const orderQuery = require('./order-query.js');

module.exports = {
	...orderAdd,
	...orderDelete,
	...orderTask,
	...orderDishes,
	...orderQuery
}