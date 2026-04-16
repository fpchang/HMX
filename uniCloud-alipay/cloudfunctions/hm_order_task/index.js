'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	//订单定时触发
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const timenow = Date.now();
	//议价单，入住日期小于当前时间--过期  bargainStatus-9
	const s1=`checkInStartDateTimeStamp<=${timenow-1000*60*60*10}&&orderType=='bargain'`;
	//支付订单，需要付款的30分钟未付款，失效 payStatus=9，orderStatus==10，
	const s2 =`ordetType=='normal'&&payType=='online'&&payStatus==0&&createTime<=${timenow-1000*60*30}`;
	//普通订单，当前日期已经超过退房日期 orderStatus=2
	const s3=`checkInEndDateTimeStamp<=${timenow}&&orderType=='normal'&&orderStatus==1`;
	try {
		dbJQL.collection("hm-order").where(s1).update({bargainStatus:9});
		dbJQL.collection("hm-order").where(s2).update({payStatus:9,orderStatus:10});
		dbJQL.collection("hm-order").where(s3).update({orderStatus:5});
	} catch (error) {
		console.log("error",error);
	}
	 
	
};
