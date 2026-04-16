'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		scenicSpotDetailObj
	} = event;
	console.log("hm-scenicSpotPriceDetail", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	//const db = uniCloud.database();
	//const dCmd = db.command;
	// const result = await db.collection('hm-hotel').doc(_id).update({
	// 	employee: dCmd.push([employeeObj])
	// });
	const result = await dbJQL.collection('hm-scenicSpotPriceDetail').add(scenicSpotDetailObj);
	return result;
};