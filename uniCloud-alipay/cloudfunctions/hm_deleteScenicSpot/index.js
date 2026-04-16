'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		_id,
	} = event;
	console.log("hm_deleteScenicSpot", event);
	const db = uniCloud.database();
	const ta =await db.startTransaction();
	
	try{
		const ssd = await db.collection('hm-scenicSpotPriceDetail').where({scenicSpot_id:_id}).remove();
		const ss = await db.collection('hm-scenicSpot').doc(_id).remove();
		ta.commit();
		return result;
	}catch(e){
		console.error(e);
		ta.rollback();
	}
	
	
};