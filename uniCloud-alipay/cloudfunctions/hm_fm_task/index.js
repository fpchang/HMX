'use strict';
const dateFormat = require('dateFormat');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//console.log('event : ', event)
	//const {hotel_id} =event;
	//财务定时触发
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const indatetime= new Date(dateFormat(new Date(), "yyyy/MM/dd") + " 14:00:00").getTime();
	//将已完成的入住订单金额添加到收入订单
	const s1=`checkInStartDateTimeStamp==${indatetime}&&orderStatus==5`;
//console.log("s1",s1)
	try {
		const res = await dbJQL.collection("hm-order").where(s1).groupBy('hotel_id').groupField('sum(totalAmount) as amount').get();
		const re = await db.collection("hm-incomeAndExpenses").where({
			type:"roomRate",
			ioeTime:indatetime
		}).get()
		//console.log("res==",res);
		//console.log("re==",re);
		if(re.data.length>0){
			//console.log("已经有了， 不需要再添加了")
			return;
		}
		let arr = res.data.map(item=>{
			return {
						hotel_id:item.hotel_id,
						type:"roomRate",
						ioeTime:indatetime,
						amount:item.amount,
						billType:"income",
						mark:"自动任务-房费"
					};
		})

					//console.log("自动任务",arr)
		dbJQL.collection("hm-incomeAndExpenses").add(arr) 

	} catch (error) {
		//console.log("error",error);
	}
	 
	
};
