'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		employeeObj
	} = event;
	console.log("hm_addEmployee", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const db = uniCloud.database();
	//const dCmd = db.command;
	// const result = await db.collection('hm-hotel').doc(_id).update({
	// 	employee: dCmd.push([employeeObj])
	// });
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
	//console.log('1111',employeeObj)
	const result = await dbJQL.collection('hm-employee').add(employeeObj);
	return result;
};