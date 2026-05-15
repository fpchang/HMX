const roomAdd = require('./room-add.js');
const roomUpdate = require('./room-update.js');
const roomDelete = require('./room-delete.js');
const roomQuery = require('./room-query.js');

module.exports = {
	...roomAdd,
	...roomUpdate,
	...roomDelete,
	...roomQuery
}