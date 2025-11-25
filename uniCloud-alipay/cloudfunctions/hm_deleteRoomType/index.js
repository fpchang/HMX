'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {_id} =event;
	console.log("hm_deleteRoomType",event);
		const db =uniCloud.database();
		const dCmd=db.command;
	const result = await db.collection('hm-roomType').doc(_id._value).remove();
	return result;
};
