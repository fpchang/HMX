'use strict';
const dateFormat = require('dateFormat');
const jwt = require('jsonwebtoken');
const tokenEvent = require('tokenEvent');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//console.log('event : ', event);
	const starttime = new Date().getTime();
	let {
		userForm,
		hm_token,
		client,
	} = event;
	let {smsCode,phone,tk}=userForm;	
	console.log("登录参数",event,client)
	const secret = tokenEvent.getSecret();	
	//const verifT = tokenEvent.verifyToken(newToken,secret);
	////console.log("token----",verifT.exp);
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
			event,
			context
		});
		//小程序或测试账号
		if(!isTestAccount(phone)&&client!='MP'){
			//检验短信正确性
			const verifT = tokenEvent.verifyToken(tk,secret);
			//console.log("aaa",verifT)
			if(!verifT||verifT.value.smsCode!=smsCode){
				//短信验证码校验通过
				 return {code:4001,msg:"短信验证码不正确"};			
			}
		}
		
		
		try{
			const userRes = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();	
					//console.log("MMMMuser",userRes)
			if(userRes.data.length>0){				
				const user  = userRes.data[0];
				//更新token
				const newToken = tokenEvent.getToken({phone:phone},secret,(new Date().getTime()+1000*60*60*24*30));
			    const upuserRes= await dbJQL.collection('hm-user').doc(user._id).update({'hm_token':newToken});
				user.hm_token =newToken;
				return {code:0,msg:"",data:{token:newToken}};
			}
				//注册
				const newToken = tokenEvent.getToken({phone:phone},secret,(new Date().getTime()+1000*60*60*24*30));
				
			
			//添加新用记到数据表hm-user
			const res = await uniCloud.callFunction({
				name:'hm-addUser',
				data:{userInfo:getUser(phone,newToken)}
			})
			return {code:0,msg:"",data:{token:newToken}};
		 }catch(e){
		 	console.error(e);
		 	return {code:40002,msg:"登录失败"}
		 }
	
	
	
	
	
};
async function validToken(token){
	return false
}
function isTestAccount(phone="",smsCode){
	const testAccountList=[
	{phone:"18516285834",smsCode:"1234"},
	{phone:"19083441181",smsCode:"1234"},
	{phone:"13122905834",smsCode:"1234"}]
	
	let t = testAccountList.find(item=>item.phone==phone);
	return t?true:false;
}
function getUser(phone,token) {
	let vipStartDateStamp = new Date().getTime();
	let vipEndDateStamp = new Date().getTime()+ 30*1000*60*60*24;
	return  {
		"idCard": "",
		"vipStartDateStamp": vipStartDateStamp,
		"isVip": true,
		"nickName": "",
		"phone": phone,
		"userId": phone,
		"userName": "",
		"vipEndDate": dateFormat(new Date(vipEndDateStamp),"yyyy-MM-dd HH:mm:ss"),
		"vipEndDateStamp":vipEndDateStamp,
		"vipStartDate": dateFormat(new Date(vipStartDateStamp),"yyyy-MM-dd HH:mm:ss"),
		"wxNickName": "",
		"wxOpenId": "",
		"hm_token":token,
		"blongEmployment": []
	}
}