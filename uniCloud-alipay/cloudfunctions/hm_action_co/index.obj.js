 const hotel =require("./modules/hotel/index.js");
const order =  require("./modules/order/getOrderList.js");
module.exports = {
	_before: function () { // 通用预处理器

	},
	...hotel,
	...order,
	
}
