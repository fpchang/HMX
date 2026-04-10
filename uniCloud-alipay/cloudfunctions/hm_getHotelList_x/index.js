'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//console.log('event : ', event);
	const {$token} = event;
	if(!$token){
		throw new Error("token不能为空")
	}
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	try{
		
		const verifyTokenObj =tokenEvent.verifyToken($token,"****");
		 
		 const {phone,account} = verifyTokenObj.value;
		 if(!phone && !account){
			 throw new Error("无有效用户信息");
		 }
		 console.log("getHotelList",phone,account);
		//const sql =`phone=='${phone.toString()}'||account=='${account.toString()}'`
		 const sql =phone?`phone=='${phone.toString()}'`:`account=='${account.toString()}'`
		const emTemp = dbJQL.collection("hm-employee").where(sql).getTemp();
		const hoTemp = dbJQL.collection("hm-hotel").where("dataStatus!=10").getTemp();
		const res = await dbJQL.collection(emTemp,hoTemp).get();
		console.log("aaaaaaaa",res)
		// //console.log("11111111",formatHotelToArray(res.data))
		res.data = formatHotelToArray(res.data);
		return res;
	}catch(e){
		throw new Error(e)
	}
	
};
  function formatHotelToArray(list=[]){
        let arr =[];
        list.map(item=>{
			if(item.hotel_id[0]){
				item.hotel_id[0].curRole=item.role;
				arr.push(item.hotel_id[0]); 
			}
           
        })
        return arr;
    }