'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let {_id} = event;
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	});
	const res = await dbJQL.collection("hm-order").doc(_id).update({'orderStatus':10});
	//返回数据给客户端
	return res;
};
