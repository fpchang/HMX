// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器
		const methodName = this.getMethodName()
	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
   async register(userForm={}){
	   const {
		   account,
		   email,
		   emailcode,
		   password,
		   confirmPassword,
		   emailCodeTk
	   }
   },
   /**
	* @param {Object} accountObject
	*/
   async resetPasswordByEmailCode(accountObject){
	   const {
		   account,
		   email,
		   emailcode,
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