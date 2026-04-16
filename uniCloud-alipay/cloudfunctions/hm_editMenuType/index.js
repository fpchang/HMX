'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		menuTypeObj
	} = event;
	console.log("hm-editMenuType", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-menuType').doc(_id).update(menuTypeObj);
	return result;
};