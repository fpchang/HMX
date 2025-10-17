// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	
	getHotelListByMobile(mobile,token) {
		// 参数校验，如无参数则不需要
		if (!mobile) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		console.log("hm-getHotelObj>>>");
		const dbJQL = uniCloud.databaseForJQL();
		const hotelList  = await dbJQL.collection('hm-hotel').where(`blongUserId=='${mobile}'`).get();
		return hotelList;
	
	}
	
}
