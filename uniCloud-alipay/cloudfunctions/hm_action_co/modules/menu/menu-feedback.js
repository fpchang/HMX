module.exports = {
	async menu_addFeedback(event) {
		let { feedbackObj } = event;
		console.log("menu_addFeedback", event);
		const dbJQL = uniCloud.databaseForJQL({
			event,
			context: this.getClientInfo()
		})
		const result = await dbJQL.collection('hm-feedback').add(feedbackObj);
		return result;
	}
}