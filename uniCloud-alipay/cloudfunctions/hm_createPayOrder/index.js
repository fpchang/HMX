'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {$token} = event;
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	});
	try{
		 const verifyTokenObj =tokenEvent.verifyToken($token,tokenEvent.getSecret());		 
		 const {phone} = verifyTokenObj.value;
		 const res =await dbJQL.collection("hm-memberOrder").add({
			 phone
			 
		 });
		 return res;
	}catch(e){
		throw Error(e);
	}
	
};
