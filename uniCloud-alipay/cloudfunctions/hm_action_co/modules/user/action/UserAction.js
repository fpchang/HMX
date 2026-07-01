const utils = require('../../utils/index.js');
class UserAction {
	constructor(ctx) {
		this.ctx = ctx;
	}
	async addUser(userForm) {
		let {
			userInfo
		} = event;
		console.log("user_addUser", event);
		const dbJQL = uniCloud.databaseForJQL()
		const addResult = await dbJQL.collection('hm-user').add(userInfo)
		return addResult;
	}
	async deleteUser(user_id) {}
	async updateUser(userForm) {}
	async getUser() {
		const dbJQL = uniCloud.databaseForJQL();
		const db = uniCloud.database();
		const field = "_id,isVip,nickName,phone,userName,avatar,closeAccountDateTime,account,email,accountStatus";
		const fieldObj = {
			_id: true,
			isVip: true,
			nickName: true,
			phone: true,
			userName: true,
			avatar: true,
			closeAccountDateTime: true,
			account: true,
			email: true,
			accountStatus: true
		};
		let w = {
			hm_token: this.ctx.$token
		};
		console.log('w==', w)
		try {
			const res = await db.collection("hm-user").where(w).field(fieldObj).get();
			const user = res.data[0];
			console.log("user", user);
			if (!user) {
				throw new Error("未查到用户信息")
			}
			return res;
		} catch (error) {
			throw error;
		}
	}
	/**
	 * 账号注销
	 */
	async closeAccount() {

		const db = uniCloud.database();
		try {

			const {
				account_id
			} = this.ctx._tokenInfo;
			const time = Date.now();
			const hotelListRes = await db.collection("hm-hotel").where({
				ownership_id: account_id
			}).get();
			console.log("hotelList", hotelListRes);
			if (hotelListRes.data.length) {
				return {
					errCode: 998,
					errMsg: "please delete hotel before cancel your account ",
					data: {}
				}
			}
			const res = await db.collection("hm-user").where({
				_id: account_id
			}).update({
				accountStatus: 9,
				closeAccountDateTime: time
			});
			console.log("close account", res)
			return {
				code: 0,
				errCode: 0,
				errMsg: "",
				data: res.updated == 1
			};
		} catch (e) {
			throw new Error(e)
		}
	}
	/**
	 * @param {Object} update email
	 */
	async updateEmail(email, emailCode, emailCodeTk) {
		if (!email) {
			return {
				errCode: 10,
				errMsg: "邮箱不能为空"
			}
		}
		console.log("参数", email, emailCode, emailCodeTk)
		const secret = utils.getSecret();
		const verifT = utils.verifyToken(emailCodeTk, secret);
		console.log('verift', verifT);
		if (!verifT || verifT.value.emailCode != emailCode) {
			return {
				errCode: 202,
				errMsg: "邮箱验证码不正确",
				data: false
			};
		}
		if (verifT.value.email != email) {
			return {
				errCode: 202,
				errMsg: "邮箱与验证码不匹配",
				data: false
			};
		}
		const {
			account_id
		} = this.ctx._tokenInfo;
		const db = uniCloud.database();
		try {
			const res = await db.collection("hm-user").doc(account_id).update({
				email: email
			});
			return {
				errCode: 0,
				errMsg: "",
				data: true
			};
		} catch (e) {
			console.log("update email fail", e)
			throw new Error(e.message);
		}

	}
	async validUpdatePhone(phone){
		const {
			account_id
		} = this.ctx._tokenInfo;
		const db = uniCloud.database();
		const userListRes = await db.collection('hm-user')
			.where({
				_id: db.command.neq(account_id),
				phone: phone
			})
			.get();
		if (userListRes.data.length > 0) {
			return {
				errCode: 403,
				errMsg: "当前手机号已被占用",
				data: false
			}
		}
		return {errCode:0,errMsg:"",data:true}
	}
	async updatePhone(userForm) {

		let {
			smsCode,
			phone,
			tk
		} = userForm;
		const secret = utils.getSecret();
		const db = uniCloud.database();
		const verifT = utils.verifyToken(tk, secret);
		if (!verifT || verifT.value.smsCode != smsCode) {
			return {
				errCode: 202,
				errMsg: "验证码不正确",
				data: {}
			};
		}
		try {
			const {
				account_id
			} = this.ctx._tokenInfo;
			// const userListRes = await db.collection('hm-user')
			// 	.where({
			// 		_id: db.command.neq(account_id),
			// 		phone: phone
			// 	})
			// 	.get();
			// if (userListRes.data.length > 0) {
			// 	return {
			// 		errCode: 403,
			// 		errMsg: "当前手机号已被占用",
			// 		data: false
			// 	}
			// }
			const validphone =  await this.validUpdatePhone(phone);
			console.log("3333",validphone)
			if(validphone.errCode!=0){
				return validphone;
			}
			const res = await db.collection('hm-user').doc(account_id).update({
				phone
			})
			return {
				errCode: 0,
				errMsg: "",
				data: true
			};

		} catch (e) {
			throw new Error(e);

		}
	}
}

module.exports = {
	UserAction
};