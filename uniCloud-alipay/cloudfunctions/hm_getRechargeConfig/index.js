'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {$token} = event;
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	});
	let priceTotal=[]
	try{
		 const verifyTokenObj =tokenEvent.verifyToken($token,tokenEvent.getSecret());		 
		 const {phone} = verifyTokenObj.value;
		 const res =await dbJQL.collection("hm-rechargeConfig").where({phone:phone,status:true}).get();
		 return res;
	}catch(e){
		throw Error(e);
	}
	return event
};
