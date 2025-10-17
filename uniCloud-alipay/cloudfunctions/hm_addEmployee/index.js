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
	const result = await dbJQL.collection('hm-employee').add(employeeObj);
	return result;
};