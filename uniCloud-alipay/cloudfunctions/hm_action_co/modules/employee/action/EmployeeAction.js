const utils = require('../../utils/index.js');
class EmployeeAction {
	constructor(ctx) {
		this.ctx = ctx;
	}
	async addEmployee(employeeObj) {
		const db = uniCloud.database();
		const {
			phone,
			account
		} = employeeObj;
		if (!phone && !account) {
			return {
				errCode: 201,
				errMsg: "无有效账号信息"
			};
		}
		//const sql = phone ? `phone=='${phone+""}'` : `account=='${account+""}'`;
		const sql = phone ? {
			phone: phone
		} : {
			account: account
		};
		const targetRes = await db.collection('hm-user').where(sql).get();
		const user = targetRes.data[0];
		if (!user) {
			return {
				errCode: 101,
				errMsg: "账号或手机号无效，请员工先注册"
			};
		}
		const u_id = user._id;
		employeeObj.account_id = u_id;
		try {
			const result = await db.collection('hm-employee').add(employeeObj);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
	async editEmployee(employeeObj) {
		let {
			_id,
			phone,
			account
		} = employeeObj;
		const db = uniCloud.database();
		if (!phone && !account) {
			throw new Error("无有效账号信息");
		}
		const sql = phone ? {
			phone: phone
		} : {
			account: account
		};
		const targetRes = await db.collection('hm-user').where(sql).get();
		const user = targetRes.data[0];
		if (!user) {
			throw new Error("账号或手机号无效，请员工先注册")
		}
		const u_id = user._id;
		employeeObj.account_id = u_id;
		try {
			console.log("update", employeeObj)
			const result = await db.collection('hm-employee').doc(_id).update(employeeObj);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
	async deleteEmployee(employee_id) {
		const db = uniCloud.database();
		const result = await db.collection('hm-employee').doc(employee_id).remove();
		return result;
	}
}
module.exports = {
	EmployeeAction
};