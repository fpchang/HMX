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
const { getI18nMsg } = require('./i18n/index.js');
const methodList = [
	//'user_login',
	//'user_register',
	//'user_sendSms',
	'user_validToken',
	'user_getUser',
	'user_closeAccount',
	'user_checkLogin',
	'user_validEmailAndCode',
	'user_updatePassword',
	'user_resetPasswordByEmailCode',
	'user_loginMp',
	'user_addUser',
	'hotel_createHotel',
	'hotel_updateHotel',
	'hotel_deleteHotel',
	'hotel_getHotelList',
	'hotel_getHotelList_x',
	'hotel_hotelApprove',
	'hotel_getHotelListByMobile',
	'room_addRoom',
	'room_updateRoom',
	'room_deleteRoom',
	'room_deleteRoom_x',
	'room_getRemainderRoomList',
	'roomType_addRoomType',
	'roomType_updateRoomType',
	'roomType_deleteRoomType',
	'roomType_deleteRoomType_x',
	'roomType_getRoomType',
	'roomType_getRemainderRoomType',
	'order_addOrder',
	'order_deleteOrder',
	'order_addOrderDishes',
	'order_deleteOrderDishes',
	'employee_addEmployee',
	'employee_editEmployee',
	'employee_deleteEmployee',
	'menu_addMenuDetail',
	'menu_addMenuType',
	'menu_deleteMenuDetail',
	'menu_deleteMenuType',
	'menu_editMenuDetail',
	'menu_editMenuType',
	'menu_addFeedback',
	'scenicSpot_addScenicSpot',
	'scenicSpot_addScenicSpotDetail',
	'scenicSpot_deleteScenicSpot',
	'scenicSpot_deleteScenicSpotDetail',
	'scenicSpot_editScenicSpot',
	'scenicSpot_editScenicSpotDetail',
	'fm_deleteFm',
	'fm_createPayOrder',
	'fm_createRechargeOrder',
	'fm_getRechargeConfig',
	'config_getConfig',
	'permission_getPermission',
	'permission_getPermission_x'
];

module.exports = {
	/**
	 * this._tokenInfo:解析的token
	 * this.$t 国际化对象
	 */
	_before: function () {
		const clientInfo = this.getClientInfo();
		const lang = utils.utils_getLanuage(clientInfo);
		console.log('客户端语言',lang);
		this.$t = getI18nMsg(lang);
		console.log("$t",this.$t);
		
		const methodName = this.getMethodName();
		if (methodList.includes(methodName)) {
			const token = this.getUniIdToken();
			if(!token){
				return {errCode:"9999",errMsg:"",data:[]}
			}	
				const secret = utils.utils_getSecret();
				const verifyResult = utils.utils_verifyToken(token, secret);
				if (verifyResult) {
					this._tokenInfo = verifyResult.value;
				
				}
				
			
			
		}
	},
	getTokenInfo: function () {
		return this._tokenInfo || {};
	},
	getUser: function () {
		return this._user || {};
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