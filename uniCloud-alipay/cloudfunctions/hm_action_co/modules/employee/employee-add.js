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
	}
}