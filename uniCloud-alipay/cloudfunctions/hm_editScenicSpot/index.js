'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
		scenicSpotObj
	} = event;
	console.log("hm-editscenicSpot", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-scenicSpot').doc(_id).update(scenicSpotObj);
	return result;
};