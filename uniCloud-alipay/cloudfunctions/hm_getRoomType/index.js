'use strict';
//根据hotel_id 获取房型数据
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {hotel_id} =event;
	console.log("hm-getRoomType",event,context);
	const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		})
	const roomTypeList  = await dbJQL.collection('hm-roomType').where(`hotel_id=='${hotel_id}'`).get();
	return roomTypeList;
};
