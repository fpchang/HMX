module.exports = {
	async employee_addEmployee(event) {
		let { employeeObj } = event;
		console.log("employee_addEmployee", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const { phone, account } = employeeObj;
		if (!phone && !account) {
			return { errCode: 201, errMsg: "无有效账号信息" };
		}
		const sql = phone ? `phone=='${phone+""}'` : `account=='${account+""}'`;
		const targetRes = await dbJQL.collection('hm-user').where(sql).get();
		const user = targetRes.data[0];
		if (!user) {
			return { errCode: 101, errMsg: "账号或手机号无效，请员工先注册" };
		}
		const u_id = user._id;
		employeeObj.account_id = u_id;
		try {
			const result = await dbJQL.collection('hm-employee').add(employeeObj);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	},

	async employee_editEmployee(event) {
		let { _id, employeeObj } = event;
		console.log("employee_editEmployee", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const { phone, account } = employeeObj;
		if (!phone && !account) {
			throw new Error("无有效账号信息");
		}
		const sql = phone ? `phone=='${phone+""}'` : `account=='${account+""}'`;
		const targetRes = await dbJQL.collection('hm-user').where(sql).get();
		const user = targetRes.data[0];
		if (!user) {
			throw new Error("账号或手机号无效，请员工先注册")
		}
		const u_id = user._id;
		employeeObj.account_id = u_id;
		try {
			console.log("update", employeeObj)
			const result = await dbJQL.collection('hm-employee').doc(_id).update(employeeObj);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	},

	async employee_deleteEmployee(event) {
		let { _id, employee } = event;
		console.log("employee_deleteEmployee", event);
		const db = uniCloud.database();
		const result = await db.collection('hm-employee').doc(_id).remove();
		return result;
	}
}
