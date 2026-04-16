'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {_id} =event;
	console.log("hm_deleteRoom",event);
		const db =uniCloud.database();
		const dCmd=db.command;
	const result = await db.collection('hm-room').doc(_id).remove();
	return result;
};
