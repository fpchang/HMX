module.exports = {
	async user_getUser() {
	const dbJQL = uniCloud.databaseForJQL()
		const field = "_id,isVip,nickName,phone,userName,avatar,closeAccountDateTime,account,email,accountStatus";
		let w ={ hm_token: this.$token };
		try {
			const res = await dbJQL.collection("hm-user").where(w).field(field).get();
			const user = res.data[0];
			console.log("user",user);
			if (!user) {
				throw new Error("未查到用户信息")
			}
			return res;
		} catch (error) {
			throw error;
		}
	},

	async user_closeAccount() {

		const dbJQL = uniCloud.databaseForJQL()
		try {
			
			const { account_id } = this._tokenInfo;
			const time = Date.now();
			const res = await dbJQL.collection("hm-user").where({ _id: account_id }).update({ accountStatus: 9, closeAccountDateTime: time });
			return res;
		} catch (e) {
			throw new Error(e)
		}
	},

	async user_checkLogin(event) {
		return event;
	}
}