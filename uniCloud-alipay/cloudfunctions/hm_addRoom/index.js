'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		roomList
	} = event;
	console.log("hm_addRoom", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	try {
		const result = await dbJQL.collection('hm-room').add(roomList);
		return result;
	} catch (error) {
		throw new Error(error);
	}
	
	
	
};