'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {$token,rechargeConfig_id} = event;
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	});
	let priceTotal=[]
	try{
		 const verifyTokenObj =tokenEvent.verifyToken($token,tokenEvent.getSecret());		 
		 const {phone} = verifyTokenObj.value;
		 const res =await dbJQL.collection("hm-rechargeOrder").add({
			 phone,
			 rechargeConfig_id
			 
		 });
		 let order_id = res.id;
		 let configRes = await db.collection("hm-rechargeConfig").where({_id:rechargeConfig_id}).get();
		 let options = {
		 	total_fee:configRes.data[0].price*100, // 支付金额，单位分 100 = 1元
		 	type: "recharge", // 支付回调类型
		 	order_no: order_id, // 业务系统订单号
		 	description: "vip订阅充值", // 支付描述
		 };
		 let optionsStr = encodeURI(JSON.stringify(options));
		 return {code:0,optionsStr:optionsStr};
	}catch(e){
		throw Error(e);
	}
	
};
