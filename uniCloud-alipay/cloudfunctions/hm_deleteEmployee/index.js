'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		employee
	} = event;
	console.log("hm_deleteREmployee", event);
	const db = uniCloud.database();
	const result = await db.collection('hm-employee').doc(_id).remove();
	return result;
};