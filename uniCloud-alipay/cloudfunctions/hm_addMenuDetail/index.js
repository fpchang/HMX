'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		menuDetailObj
	} = event;
	console.log("hm-menuDetail", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-menuDetail').add(menuDetailObj);
	return result;
};