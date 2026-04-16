'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
	} = event;
	console.log("hm_deleteScenicSpotDetail", event);
	const db = uniCloud.database();
	const result = await db.collection('hm-scenicSpotPriceDetail').doc(_id).remove();
	return result;
};