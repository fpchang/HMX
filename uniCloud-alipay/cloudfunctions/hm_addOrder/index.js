'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		orderObj
	} = event;
	console.log("hm_addOrder", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-order').add(orderObj);
	return result;
};