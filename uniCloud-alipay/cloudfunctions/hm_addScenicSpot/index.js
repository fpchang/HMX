'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		scenicSpotObj
	} = event;
	console.log("hm-scenicSpot", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	//const db = uniCloud.database();
	//const dCmd = db.command;
	// const result = await db.collection('hm-hotel').doc(_id).update({
	// 	employee: dCmd.push([employeeObj])
	// });
	const result = await dbJQL.collection('hm-scenicSpot').add(scenicSpotObj);
	return result;
};