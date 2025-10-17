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
	const dbcm = db.command;
	const s1={
		 wechat: dbcm.exists(true).neq(""),
		 firstImages:dbcm.exists(true).neq("https://env-00jxhfhjd231.normal.cloudstatic.cn/HM/images/app.png")	 		 
	}
	const s="wechat!=''&&wechat!=null&&isArray(imagesList) && size(imagesList) > 0 &&firstImages!=null&&firstImages!='https://env-00jxhfhjd231.normal.cloudstatic.cn/HM/images/app.png'"
	try {
		//const res = dbJQL.collection("hm-hotel").where(s).get();

		dbJQL.collection("hm-hotel").where(s).update({dataStatus:1});
		//return res;
	} catch (error) {
		console.log("error",error);
	}
	 
	
};
