const employeeAdd = require('./employee-add.js');
const employeeEdit = require('./employee-edit.js');
const employeeDelete = require('./employee-delete.js');

module.exports = {
	...employeeAdd,
	...employeeEdit,
	...employeeDelete
}