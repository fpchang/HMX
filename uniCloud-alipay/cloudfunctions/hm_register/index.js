'use strict';
const {encryptPassword} = require('encryptPassword');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
		const {user}=event;
		const {account,password,email}=user;
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		});
		console.log("params::",user,account)
		if(account==""){
			return {code:40,msg:"账号不能为空"}
		}
		if(password==""){
		
			return {code:40,msg:"密码不能为空"} 
		}
		try {
			
			const ep = encryptPassword(password);
			const user= formatUser(account,ep);
			const result = await dbJQL.collection('hm-user').add(user);
			return true;
		} catch (error) {
			console.log(error)
			throw new Error("注册失败");
		}
	//返回数据给客户端
	return event
};




function formatUser(account,password){
	return {
		idCard: "",
		vipStartDateStamp: "",
		isVip: false,
		nickName: "",
		//phone: null,
		account:account,
		password:password,
		email:"",
		userName: "",
		vipEndDate: "",
		vipEndDateStamp: "",
		closeAccountDateTime:null,
		vipStartDate: "",
		wxNickName: "",
		wxOpenId: "",
		hm_token: "",
		avatar:"",
		accountStatus: 1
	}
	
}