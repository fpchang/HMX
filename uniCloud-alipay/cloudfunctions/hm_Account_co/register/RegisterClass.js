'use strict';
const {
	encryptPassword
} = require('encryptPassword');
 class RegisterClass {
	constructor(account, password, email) {
		this.account = account;
		this.password = password;
		this.email = email;
	}
	async validForm() {
		let msg = ""
		if (this.account == "") {
			msg = "账号不能为空";
		}
		if (this.password == "") {
			msg = "账号不能为空";
		}
		const dbJQL = uniCloud.databaseForJQL();
		const sql = `email=='${this.email}'||account=='${this.account}'`;
		const validuser = await dbJQL.collection('hm-user').where(sql).get();
		if (validuser.data.length > 0) {
			const hasAccount = validuser.data.find(item => item.account == this.account);
			const hasEmail = validuser.data.find(item => item.email == this.email);
			if (hasAccount) {
				msg = "该账号已经注册";
			}
			if (hasEmail) {
				msg = "该邮箱已经注册";
			}
		}
		return msg;
	}
	async register() {
		const msg = await this.validForm();
		if (msg) {
			return {
				errCode: 101,
				errMsg: msg
			};
		}
		try {
			const dbJQL = uniCloud.databaseForJQL();
			const ep = encryptPassword(this.password);
			const user = formatUser(this.account, ep, this.email);
			console.log(user)
			const result = await dbJQL.collection('hm-user').add(user);
			return result
		} catch (error) {
			console.log(error)
			throw new Error(error);
		}
	}
}

 function formatUser(account, password, email = '') {
	return {
		idCard: "",
		vipStartDateStamp: "",
		isVip: false,
		nickName: "",
		//phone: null,
		account: account,
		password: password,
		email: email,
		userName: "",
		vipEndDate: "",
		vipEndDateStamp: "",
		closeAccountDateTime: null,
		vipStartDate: "",
		wxNickName: "",
		wxOpenId: "",
		hm_token: "",
		avatar: "",
		accountStatus: 1
	}

}

module.exports = { RegisterClass, formatUser };