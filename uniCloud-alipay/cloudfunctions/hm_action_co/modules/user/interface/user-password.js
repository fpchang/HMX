const utils = require('../utils/index.js');


module.exports = {
	//通过原密码修改密码
	async user_updatePassword(password, originPassword) {
		console.log("oooo", originPassword, password);
		if (!password) {
			return {
				errMsg: "新密码不能为空",
				errCode: 102
			};
		}
		const {account_id} = this._tokenInfo;
		const flag = await this.user_validPasswordIsCorrent(account_id, originPassword);
		if (!flag) {
			return {
				errMsg: "原密码不正确",
				errCode: 103
			};
		}
		const res = await this.user_resetPassword(account_id, password);
		return res;
	},
//重置密码
	async user_resetPassword(_id, password) {
		if (!password) {
			return { errCode: 10, errMsg: "密码不能为空" }
		}
		const ep = utils.utils_encryptPassword(password);
		const db = uniCloud.databaseForJQL();
		const res = await db.collection("hm-user").doc(_id).update({ password: ep });
		return res;
	},
//通过邮箱验证码重置密码
	async user_resetPasswordByEmailCode(email, emailCode, emailCodeTk, password) {
		try {
			const secret = utils.utils_getSecret();
			const verifT = utils.utils_verifyToken(emailCodeTk, secret);
			console.log('verift', verifT);
			if (!verifT || verifT.value.emailCode != emailCode) {
				return {
					errCode: 202,
					errMsg: "邮箱验证码不正确"
				};
			}
			if (verifT.value.email != email) {
				return {
					errCode: 202,
					errMsg: "邮箱与验证码不匹配"
				};
			}
			const res = await this.user_resetPasswordByEmail(email, password);
			console.log("resetpassword res ", res);
			if (res.updated < 1) {
				return {
					errCode: 404,
					errMsg: "未找到相关账号"
				}
			}
			return res;
		} catch (error) {
			throw new Error(error);
		}
	},
//通过 邮箱 重置密码
	async user_resetPasswordByEmail(email, password) {
		if (!password) {
			return { errCode: 101, errMsg: "密码不能为空" }
		}
		if (!email) {
			return { errCode: 102, errMsg: "邮箱不能为空" }
		}
		const ep = utils.utils_encryptPassword(password);
		const db = uniCloud.databaseForJQL();
		const res = await db.collection("hm-user").where({ email: email }).update({ password: ep });
		return res;
	},
	//检验密码是否正确
	async user_validPasswordIsCorrent(_id, password) {
		const db = uniCloud.databaseForJQL();
		const user = await db.collection("hm-user").doc(_id).get();
		const ep = utils.utils_encryptPassword(password);
		const psd = user.data[0].password;
		if (psd === "" || psd === null || psd === undefined) {
			return true;
		}
		return psd === ep;
	}
}