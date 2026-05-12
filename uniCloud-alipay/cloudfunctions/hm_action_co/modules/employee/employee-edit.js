module.exports = {
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
	}
}