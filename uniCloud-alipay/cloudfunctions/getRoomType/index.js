'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {dbJql} =event;
	console.log("hm-getRoolType",event);
	const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		})
	const result  = await dbJQL.collection('hm-hotel').where(dbJql).get();
	return result;
};
