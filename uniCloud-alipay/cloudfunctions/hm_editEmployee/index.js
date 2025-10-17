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
	const result = await db.collection('hm-employee').doc(_id).update(employeeObj);
	return result;
};