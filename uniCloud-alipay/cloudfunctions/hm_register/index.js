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
			//throw new Error("账号不能为空")
			return {errCode:401,errMsg:"账号不能为空"}
		}
		if(password==""){		
			//throw new Error("密码不能为空")
			return {errCode:401,errMsg:"账号不能为空"}
		}
		try {
			
			const ep = encryptPassword(password);
			const user= formatUser(account,ep,email);
			console.log(user)
			const result = await dbJQL.collection('hm-user').add(user);
			return result
		} catch (error) {
			console.log(error)
			throw new Error(error);
		}
	
};




function formatUser(account,password,email=''){
	return {
		idCard: "",
		vipStartDateStamp: "",
		isVip: false,
		nickName: "",
		//phone: null,
		account:account,
		password:password,
		email:email,
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