'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		menuDetail
	} = event;
	console.log("hm-editmenuDetail", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-menuDetail').doc(_id).update(menuDetail);
	return result;
};