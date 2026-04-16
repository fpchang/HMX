'use strict';
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	const {$token,$user} = event;
	if(!$token){
		throw new Error("token不能为空")
	}
	const {_id} =$user;
	const db =uniCloud.database();
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	try{
		
		const verifyTokenObj =tokenEvent.verifyToken($token,"****");		 
		 const {phone,account,account_id} = verifyTokenObj.value;
		 if(!phone && !account&&!account_id){
			 throw new Error("无有效用户信息");
		 }
		 console.log("verifyTokenObj",verifyTokenObj);
		 console.log("getHotelList",phone,account,account_id);
		//const sql =`phone=='${phone.toString()}'||account=='${account.toString()}'`
		 let sql =`account_id=='${account_id+""}'`;
		 if(!account_id){
			 sql =phone?`phone=='${phone+""}'`:`account=='${account+""}'`;
		 }
		 console.log('sql',sql);
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