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
			return {errMode:9992,errMsg:""}
		}
		
		const verifT = tokenEvent.verifyToken($token,tokenEvent.getSecret());
		if(!verifT){
			//throw errorEvent.getTokenError("token已过有效期");
			return {errCode:9990,errMsg:"token已过有效期"}
		}
		const {phone,account,account_id} = verifT.value;
		const sql = `_id=='${account_id+""}'||phone=='${phone+""}'||account=='${account+""}'`
		const userRes = await dbJQL.collection("hm-user").where(sql).get();
		
		//console.log("userRes",userRes)
		if(userRes.data.length<1){//无此账号
			return {errCode:9992,errMsg:"账号不存在"}
		}
		if(userRes.data[0]['hm_token']!=$token){
			return {errCode:9991,errMsg:"账号已在别外登录"}
		}else{
			return {errCode:0,errMsg:""};
		}
		
	}catch(e){
		//console.log(e)
		throw new Error("数据异常",e)
	}
	//返回数据给客户端
	//return event
};
