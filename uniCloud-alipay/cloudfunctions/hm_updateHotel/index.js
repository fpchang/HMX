'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		hotel_id,
		hotelObj
	} = event;
	console.log("hm_updateHotel", event);
	if(!hotel_id){
		throw new Error("缺少hotel_id")
	}
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const db = uniCloud.database();
	const dCmd = db.command;
	try{
		const result = await dbJQL.collection('hm-hotel').doc(hotel_id).update(foramtHotel(hotelObj));
		return result;
	}catch(e){
		throw new Error(e)
	}
	
};
function foramtHotel(hotel){
	let result =hotel||{};
	if(result.hasOwnProperty("curRole")){
		delete result['curRole'];
	}
	return result;
}