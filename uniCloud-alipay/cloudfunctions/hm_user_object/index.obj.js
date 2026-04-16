// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const dateFormat = require('dateFormat');
const jwt = require('jsonwebtoken');
const tokenEvent = require('tokenEvent');
module.exports = {
	_before: function() { // 通用预处理器
 const methodName = this.getMethodName();
 const token = this.getUniIdToken();
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
	sendSms() {},
	login(event) {
		const context = this.getClientInfo();
		const db = uniCloud.database();
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
			event,
			context
		})
		try{
			console.warn("2222", new Date().getTime()-starttime);
			const user = await dbJQL.collection('hm-user').where(`phone=='${phone}'`).get();
			//const user = await db.collection('hm-user').where({"phone":phone}).get();
			console.warn("3333",user, new Date().getTime()-starttime);
			if(user.data.length>0){
				return user;
			}
			//添加新用记到数据表hm-user
			const res = await uniCloud.callFunction({
				name:'hm-addUser',
				data:{userInfo:getUser(phone)}
			})
			console.warn("4444", new Date().getTime()-starttime);
			return res;
		}catch(e){
			console.error("login error",e)
		}
	},
	register() {},
	analysis(token) {
		return false;
	},
	validToken() {
		//过期，与数据库不相同
	},
	getUser(phone,token) {
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
			"token":token,
			"blongEmployment": []
		}
	}
}