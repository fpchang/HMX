'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {hotel_id,$token}=event;
	const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		});
		try{
			//验证权限，非administrator不可删除
			const secret = tokenEvent.getSecret();	
			const verifT = tokenEvent.verifyToken($token,secret);
			if(!verifT){
				//短信验证码校验通过
				 throw new Error("token无效")		
			}
			const {phone} = verifT.value;
			const res = await dbJQL.collection("hm-hotel").doc(hotel_id).get();
			if(res.data[0].belong!=phone){
				throw new Error("权限不足")
			}
			const dres = await dbJQL.collection("hm-hotel").doc(hotel_id).update({dataStatus:10});
			return dres;
		}catch(e){
			throw new Error(e)
		}

};
