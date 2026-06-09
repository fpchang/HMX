// const employeeAdd = require('./employee-add.js');
// const employeeEdit = require('./employee-edit.js');
// const employeeDelete = require('./employee-delete.js');
const {EmployeeAction} = require("./action/EmployeeAction.js");
module.exports = {
	async employee_addEmployee(employeeObj){
		return await new EmployeeAction(this).addEmployee(employeeObj);
	},
	async employee_editEmployee(employeeObj){
		return await new EmployeeAction(this).editEmployee(employeeObj);
	},
	async employee_deleteEmployee(employee_id){
		return await new EmployeeAction(this).deleteEmployee(employee_id);
	}
	
}