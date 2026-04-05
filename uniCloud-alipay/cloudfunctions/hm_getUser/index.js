'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('111111event : ', event)
	const {type,value}=event;
	if(!type){
		throw new Error("type 不能为空")
	}
	const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		})
	const field="_id,isVip,nickName,phone,userName,avatar,closeAccountDateTime,account,email,accountStatus";
	let w ={};
	if(type =='phone'){
		w={phone:value};
	
	}
	if(type =='token'){
		w={hm_token:value};
		
		
	}
	try {
		const res = 	await dbJQL.collection("hm-user").where(w).field(field).get();
		const user = res.data[0];
		if(!user){
			throw new Error("未查到用户信息")
		}
		return user;
	} catch (error) {
		throw new Error('系统异常')
	}
	
};
