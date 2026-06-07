module.exports = {
	async user_addUser(event) {
		let { userInfo } = event;
		console.log("user_addUser", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const addResult = await dbJQL.collection('hm-user').add(userInfo)
		return addResult;
	}
}