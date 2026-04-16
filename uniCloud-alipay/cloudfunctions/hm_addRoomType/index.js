'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		roomTypeObj
	} = event;
	console.log("hm_addRoomType", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	//const db = uniCloud.database();
	//const dCmd = db.command;
	const result = await dbJQL.collection('hm-roomType').add(roomTypeObj);
	return result;
};