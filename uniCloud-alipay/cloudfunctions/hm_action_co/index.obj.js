const hotel = require("./modules/hotel/index.js");
const order = require("./modules/order/index.js");
const user = require("./modules/user/index.js");
const room = require("./modules/room/index.js");
const roomType = require("./modules/roomType/index.js");
const employee = require("./modules/employee/index.js");
const menu = require("./modules/menu/index.js");
const scenicSpot = require("./modules/scenicSpot/index.js");
const fm = require("./modules/fm/index.js");
const config = require("./modules/config/index.js");
const utils = require("./modules/utils/index.js");

module.exports = {
	_before: function () {
	},
	...hotel,
	...order,
	...user,
	...room,
	...roomType,
	...employee,
	...menu,
	...scenicSpot,
	...fm,
	...config,
	...utils,
}
