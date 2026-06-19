module.exports = {
	async user_loginMp(event) {
		const { code } = event;
		const appid = "wx1e656e3fd064719a";
		const secret = '58ddb3617f26ed6bdd4b4117046ae7a8';
		try {
			const resPhone = await uniCloud.callFunction({
				name: "getMpPhoneNumber",
				data: { appid, secret, code }
			});
			console.log("resPhone", resPhone);
			const res = await uniCloud.callFunction({
				name: "hm_login",
				data: {
					client: "MP",
					userForm: { phone: resPhone.result }
				}
			});
			return { code: 0, msg: "", data: { phone: resPhone.result, token: res.result.data.token } };
		} catch (error) {
			throw new Error("登录异常", error)
		}
	}
}