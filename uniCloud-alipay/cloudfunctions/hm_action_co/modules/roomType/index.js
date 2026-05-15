const roomTypeAdd = require('./roomType-add.js');
const roomTypeUpdate = require('./roomType-update.js');
const roomTypeDelete = require('./roomType-delete.js');
const roomTypeQuery = require('./roomType-query.js');
const roomTypeRemainder = require('./roomType-remainder.js');

module.exports = {
	...roomTypeAdd,
	...roomTypeUpdate,
	...roomTypeDelete,
	...roomTypeQuery,
	...roomTypeRemainder
}