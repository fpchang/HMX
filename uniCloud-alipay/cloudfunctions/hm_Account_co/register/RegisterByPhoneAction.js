'use strict';
const dateFormat = require('dateFormat');
const tokenEvent = require('tokenEvent');
class RegisterByPhoneAction {
	constructor(arg) {

	}
	async registerByPhone(phone) {

		console.log("注册");
		const secret = tokenEvent.getSecret();
		const newToken = tokenEvent.getToken({
			phone: phone
		}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
		//添加新用记到数据表hm-user
		const res = await uniCloud.callFunction({
			name: 'hm-addUser',
			data: {
				userInfo: getUser(phone, newToken)
			}
		})
		return {
			errCode: 0,
			errMsg: "",
			data: {
				token: newToken
			}
		};
	}

}

function getUser(phone, token) {
	let vipStartDateStamp = new Date().getTime();
	let vipEndDateStamp = new Date().getTime() + 30 * 1000 * 60 * 60 * 24;
	return {
		"idCard": "",
		"vipStartDateStamp": vipStartDateStamp,
		"isVip": true,
		"nickName": "",
		"phone": phone,
		//"account":null,
		//"email": "",
		"password": "",
		"userId": phone,
		"userName": `用户${phone.substr(-4)}`,
		"vipEndDate": dateFormat(new Date(vipEndDateStamp), "yyyy-MM-dd HH:mm:ss"),
		"vipEndDateStamp": vipEndDateStamp,
		"vipStartDate": dateFormat(new Date(vipStartDateStamp), "yyyy-MM-dd HH:mm:ss"),
		"wxNickName": "",
		"wxOpenId": "",
		"hm_token": token,
		"avatar": "",
		"blongEmployment": []
	}
}
module.exports = {
	RegisterByPhoneAction
};