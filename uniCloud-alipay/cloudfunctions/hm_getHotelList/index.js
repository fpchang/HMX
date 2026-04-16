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
		 
		 const {phone} = verifyTokenObj.value;
		 console.log("getHotelList",phone);
		const emTemp = dbJQL.collection("hm-employee").where({phone:phone+""}).getTemp();
		const hoTemp = dbJQL.collection("hm-hotel").where("dataStatus!=10").getTemp();
		const res = await dbJQL.collection(emTemp,hoTemp).get();
		console.log("aaaaaaaa",res)
		// //console.log("11111111",formatHotelToArray(res.data))
		return formatHotelToArray(res.data);
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