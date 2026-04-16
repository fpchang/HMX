'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	const {$token} = event;
	if(!$token){
		throw new Error("token不能为空")
	}
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	try{
		
		const verifyTokenObj =tokenEvent.verifyToken($token,"****");
		 
		 const {phone} = verifyTokenObj.value;
		 console.log(">>>",phone);
		const time = Date.now();
		const res = await dbJQL.collection("hm-user").where({phone:phone}).update({accountStatus:9,closeAccountDateTime:time});
		// console.log("aaaaaaaa",res)
		// console.log("11111111",formatHotelToArray(res.data))
		return res;
	}catch(e){
		throw new Error(e)
	}
	
};
 