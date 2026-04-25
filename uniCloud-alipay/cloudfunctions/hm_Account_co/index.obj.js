// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const tokenEvent = require('tokenEvent');
const {RegisterClass} = require('./register/RegisterClass.js');
module.exports = {
	_before: function () { // 通用预处理器
		const methodName = this.getMethodName()
	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	async validEmailAndCode(email : string,emailCode:string,emailCodeTk:string){
		
			const secret = tokenEvent.getSecret();
			const verifT = tokenEvent.verifyToken(emailCodeTk, secret);
				console.log('verift',verifT);
				if (!verifT || verifT.value.emailCode != emailCode) {
					return {errCode : 202,errMsg : "邮箱验证码不正确"};
				}
				if(verifT.value.email!=email){
					return {errCode : 202,errMsg : "邮箱与验证码不匹配"};
				}
				const db = uniCloud.databaseForJQL();
				const res = await db.getCollection("hm-user", {email:email});
				console.log("EEEERRRR",res);
				const data = res['data'] as Array<UTSJSONObject>;
				if( data.length >0){
					return {errCode : 502,errMsg : "邮箱已经存在"};
				}
			return {errCode : 0,errMsg : "0"};
	},
	
   async register(userForm={}){
	   console.log("userForm",userForm);
	   const {
		   account,
		   email,
		   emailCode,
		   password,
		   confirmPassword,
		   emailCodeTk
	   }=userForm;
	   
	   const registerClass = new RegisterClass(account, password, email);
	   const res = await registerClass.register();
	   return res;
   },
   /**
	* @param {Object} accountObject
	*/
   async resetPasswordByEmailCode(accountObject){
	   const {
		   account,
		   email,
		   emailCode,
		   password,
		   confirmPassword,
	   }=accountObject;
	   const validmsg = await validAccountObject(accountObject);
	   if(validmsg){
		   return {
		   	errCode: 110,
		   	errMsg: validmsg,
		   	data: {}
		   };
	   }
	   
   }
}
//表单验证
async function validAccountObject(accountObject){
	let msg="";
	const {
			   account,
			   email,
			   emailcode,
			   password,
			   confirmPassword,
	}=accountObject;
	if(password!=confirmPassword){
		msg = "两次密码不一致";
	}
	if(account==""){
		msg = "账号不能为空";
	}
	if(emailcode!="5050"){
		msg="邮箱验证码不正确";
	}
	return msg
}