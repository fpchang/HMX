'use strict';
//添加新用户到hm-user表
exports.main = async (event, context) => {
	let {userInfo} =event;
	console.log("hm-adduser",event);
	const dbJQL = uniCloud.databaseForJQL({
			event,
			context
		})
		let result;
	const addResult = await dbJQL.collection('hm-user').add(userInfo)
	return addResult;
};
