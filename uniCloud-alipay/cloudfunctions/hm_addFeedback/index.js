'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		feedbackObj
	} = event;
	console.log("add hm-feedback", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-feedback').add(feedbackObj);
	return result;
};
