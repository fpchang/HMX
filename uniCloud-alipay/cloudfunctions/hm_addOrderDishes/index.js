'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		orderDishesObj
	} = event;
	console.log("hm_addorderDishes", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	const result = await dbJQL.collection('hm-orderDishes').add(orderDishesObj);
	return result;
};
