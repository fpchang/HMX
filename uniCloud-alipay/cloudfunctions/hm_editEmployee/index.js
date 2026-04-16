'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		employeeObj
	} = event;
	console.log("hm_updateEmployee", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const db = uniCloud.database();
	//const dCmd = db.command;
	const {phone,account} =employeeObj;
	if(!phone&&!account){
		throw new Error("无有效账号信息");
	}
	const sql = phone?`phone=='${phone+""}'`:`account=='${account+""}'`;
	const targetRes = await dbJQL.collection('hm-user').where(sql).get();
	const user = targetRes.data[0];
	if(!user){
		throw new Error("账号或手机号无效，请员工先注册")
	}
	const u_id = user._id;
	employeeObj.account_id=u_id;
	try {
		console.log("update",employeeObj)
		const result = await db.collection('hm-employee').doc(_id).update(employeeObj);
		return result;
	} catch (error) {
		throw new Error(error);
	}

};