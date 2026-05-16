const utils = require('../utils/index.js');

const regitster={
	async user_register(userForm = {}) {
		console.log("user_register", userForm);
		const { account, email, password } = userForm;
		const msg = await this.user_validRegisterForm(account, password, email);
		if (msg) {
			return {
				errCode: 101,
				errMsg: msg
			};
		}
		try {
			const dbJQL = uniCloud.databaseForJQL();
			const ep = utils.utils_encryptPassword(password);
			const user = this.user_formatUser(account, ep, email);
			console.log(user)
			const result = await dbJQL.collection('hm-user').add(user);
			return result
		} catch (error) {
			console.log(error)
			throw new Error(error);
		}
	},

	async user_registerByPhone(phone) {
		console.log("注册",phone);
		const secret = utils.utils_getSecret();
		const newToken =utils.utils_getToken({
			phone: phone
		}, secret, (new Date().getTime() + 1000 * 60 * 60 * 24 * 30));
		const dbJQL = uniCloud.databaseForJQL();
		console.log("注册对象",this.user_formatUser(phone, newToken))
		const res = await dbJQL.collection('hm-user').add(this.user_formatUser(phone, newToken));
		return {
			errCode: 0,
			errMsg: "",
			data: {
				token: newToken
			}
		};
	},

	async user_validRegisterForm(account, password, email) {
		let msg = ""
		if (account == "") {
			msg = "账号不能为空";
		}
		if (password == "") {
			msg = "密码不能为空";
		}
		const dbJQL = uniCloud.databaseForJQL();
		const sql = `email=='${email}'||account=='${account}'`;
		const validuser = await dbJQL.collection('hm-user').where(sql).get();
		if (validuser.data.length > 0) {
			const hasAccount = validuser.data.find(item => item.account == account);
			const hasEmail = validuser.data.find(item => item.email == email);
			if (hasAccount) {
				msg = "该账号已经注册";
			}
			if (hasEmail) {
				msg = "该邮箱已经注册";
			}
		}
		return msg;
	},

	user_formatUser(phone, token) {
		let vipStartDateStamp = new Date().getTime();
		let vipEndDateStamp = new Date().getTime() + 30 * 1000 * 60 * 60 * 24;
		const phone_s = phone.substr(-4);
		return {
			"idCard": "",
			"vipStartDateStamp": vipStartDateStamp,
			"isVip": true,
			"nickName": "",
			"phone": phone,
			"password": "",
			"userId": phone,
			"userName": `用户${phone_s}`,
			"vipEndDate": utils.utils_dateFormat(new Date(vipEndDateStamp), "yyyy-MM-dd HH:mm:ss"),
			"vipEndDateStamp": vipEndDateStamp,
			"vipStartDate": utils.utils_dateFormat(new Date(vipStartDateStamp), "yyyy-MM-dd HH:mm:ss"),
			"wxNickName": "",
			"wxOpenId": "",
			"hm_token": token,
			"avatar": "",
			"blongEmployment": []
		}
	}

	
}

module.exports = regitster;