const utils = require('../utils/index.js');

module.exports = {
	async user_sendSms(event) {
		let { appid, phone, templateId = 'uni_sms_test' } = event;
		const db = uniCloud.database();
		const smsCode = this.user_randomSms();
		if (this.getClientInfo().SPACEINFO.spaceId == "env-00jxh1m2dpmq" || this.user_isTestAccount(phone)) {
			const newToken =utils.utils_getToken({ phone: phone, smsCode: 1234 }, utils.utils_getSecret(), 300);
			return { code: 0, tk: newToken };
		}
		const { appId } = this.getClientInfo();
		try {
			const res = await uniCloud.sendSms({
				appid: appId,
				phone: phone,
				templateId: '34246',
				data: {
					name: 'DCloud',
					code: smsCode,
					expMinute: '5',
				}
			});
			console.log("发送短信验证结果=====", res);
			const newToken =utils.utils_getToken({ phone: phone, smsCode: smsCode }, utils.utils_getSecret(), 300);
			return { code: 0, tk: newToken };
		} catch (err) {
			console.log(JSON.stringify(err))
			console.log(err.errMsg)
			throw new Error(err);
		}
	},

	user_isTestAccount(phone = "", smsCode) {
		const testAccountList = [{
			phone: "18516285834",
			smsCode: "1234"
		},
		{
			phone: "13122905834",
			smsCode: "1234"
		}
		]
		let t = testAccountList.find(item => item.phone == phone);
		return t ? true : false;
	},

	user_randomSms() {
		let res = '';
		for (var i = 0; i < 4; i++) res += Math.floor(Math.random() * 10);
		return res;
	}
}