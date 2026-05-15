module.exports = {
	async user_getUser(event) {
		const { type, value } = event;
		if (!type) {
			throw new Error("type 不能为空")
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const field = "_id,isVip,nickName,phone,userName,avatar,closeAccountDateTime,account,email,accountStatus";
		let w = {};
		if (type == 'phone') {
			w = { phone: value };
		}
		if (type == 'token') {
			w = { hm_token: value };
		}
		try {
			const res = await dbJQL.collection("hm-user").where(w).field(field).get();
			const user = res.data[0];
			if (!user) {
				throw new Error("未查到用户信息")
			}
			return res;
		} catch (error) {
			throw new Error('系统异常')
		}
	},

	async user_closeAccount(event) {
		const { $token } = event;
		if (!$token) {
			throw new Error("token不能为空")
		}
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		try {
			const verifyTokenObj = utils.utils_verifyToken($token, "****");
			const { phone } = verifyTokenObj.value;
			const time = Date.now();
			const res = await dbJQL.collection("hm-user").where({ phone: phone }).update({ accountStatus: 9, closeAccountDateTime: time });
			return res;
		} catch (e) {
			throw new Error(e)
		}
	},

	async user_checkLogin(event) {
		return event;
	}
}