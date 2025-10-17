'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		scenicSpotPriceDetail
	} = event;
	console.log("hm-editscenicSpotPriceDetail", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-scenicSpotPriceDetail').doc(_id).update(scenicSpotPriceDetail);
	return result;
};