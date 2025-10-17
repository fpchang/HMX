'use strict';
const { setTimeout } = require('timers');
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//根据手机号，店铺id 获取用户权限
	console.log('event : ', event)
	const {hotel_id,$token} =event;
	 const dbJQL = uniCloud.databaseForJQL({
	 		event,
	 		context
	 	})
		if(!$token){
			return {code:"302",msg:"没有token，无法确定权限",data:[]}
		}
	 //获取角色
	 try{
		const verifyTokenObj =tokenEvent.verifyToken($token,"****");
		const {phone} = verifyTokenObj.value;
	 	const roleObj = await dbJQL.collection("hm-employee").where({hotel_id,phone}).get();
		let role_name = "normal";
		if(roleObj.data.length>0){	
			console.warn("3333333333",roleObj.data.length)
			role_name = roleObj.data[0]['role'];			
						
		}else{
			console.log("没有查到用户角色,为超级管理员");
			role_name = "administrator"
			
		}
		if(role_name == "administrator"){
			const resper = await dbJQL.collection("hm-permission").field("permission_name").get();
			let perArr = resper.data.map(item=>item.permission_name);
			return perArr
		}
		console.warn("role_name",role_name);
	 	const permission_select  = dbJQL.collection("hm-permission").getTemp();
	 	const role_permission_select = dbJQL.collection("hm-role-permission").where( {role_name}).getTemp();
	 	const res = await dbJQL.collection(role_permission_select,permission_select).get(); 
		console.warn("222222>>",res)
	 	return  formatPermissionToArray(res.data);
	 }catch(e){
	 	throw new Error(e)
	 }
	 
	
};
  function formatPermissionToArray(list=[]){
        let arr =[];
        list.map(item=>{
          item.permission_id[0]&&arr.push(item.permission_id[0].permission_name);  
        })
        return arr;
    }