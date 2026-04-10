'use strict';
const tokenEvent = require('tokenEvent');
const errorEvent = require('errorEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('验证token : ', event)
	const dbJQL = uniCloud.databaseForJQL({
		event,context
	});
	try{
		
		const {$token} = event;
		if(!$token){
			return {code:9992,msg:""}
		}
		
		const verifT = tokenEvent.verifyToken($token,tokenEvent.getSecret());
		if(!verifT){
			//throw errorEvent.getTokenError("token已过有效期");
			return {code:9990,msg:"token已过有效期"}
		}
		const {phone,account} = verifT.value;
		const sql = `phone=='${phone.toString()}'||account=='${account.toString()}'`
		const userRes = await dbJQL.collection("hm-user").where(sql).get();
		
		//console.log("userRes",userRes)
		if(userRes.data.length<1){//无此账号
			return {code:9992,msg:""}
		}
		if(userRes.data[0]['hm_token']!=$token){
			return {code:9991,msg:"账号已在别外登录"}
		}else{
			return {code:0,msg:""};
		}
		
	}catch(e){
		//console.log(e)
		throw new Error("数据异常",e)
	}
	//返回数据给客户端
	//return event
};
