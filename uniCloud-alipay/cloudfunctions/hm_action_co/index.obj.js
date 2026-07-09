const hotel = require("./modules/hotel/index.js");
const order = require("./modules/order/index.js");
const linen = require("./modules/linen/index.js");
const user = require("./modules/user/index.js");
const room = require("./modules/room/index.js");
const roomType = require("./modules/roomType/index.js");
const employee = require("./modules/employee/index.js");
const menu = require("./modules/menu/index.js");
const scenicSpot = require("./modules/scenicSpot/index.js");
const fm = require("./modules/fm/index.js");
const config = require("./modules/config/index.js");
const email = require("./modules/email/index.js");
const utils = require("./modules/utils/index.js");
const {
	getI18nMsg
} = require('./i18n/index.js');
const methodList = [
	'preHeat',
	'user_loginBySmsCode',
	'user_loginByApp',
	'user_loginByAccountAndPassword',
	'user_register',
	'user_sendSms',
	'sendEmailCode',
	'validEmailAndCode',
	'user_validEmailAndCode',
	'user_validToken'

];

module.exports = {
	/**
	 * this._tokenInfo:解析的token
	 * this.$t 国际化对象
	 */
	_before: function() {
		const clientInfo = this.getClientInfo();
		const lang = utils.getLanuage(clientInfo);
		console.log('客户端语言', lang);
		this.$t = getI18nMsg(lang);
		const methodName = this.getMethodName();
		console.log("方法", methodName);
		if (!methodList.includes(methodName)) {
			const params = this.getParams();
			try {
				const token = clientInfo.hm_token;
				if (!token) {
					throw new Error("token is incorrect");

				}
				const secret = utils.getSecret();
				const verifyResult = utils.verifyToken(token, secret);
				if (verifyResult) {
					console.log("设置token", verifyResult.value, token);
					this._tokenInfo = verifyResult.value;
					this.$token = token;
				}
			} catch (error) {
				throw error;
			}




		}
	},
	preHeat() {
		return {
			errCode: 0,
			errMsg: "",
			data: 1
		}
	},
	getTokenInfo: function() {
		return this._tokenInfo || {};
	},
	getUser: function() {
		return this._user || {};
	},
	async user_validToken(token) {

	},
	//账号密码登录
	async user_loginByAccountAndPassword(userForm) {

	},
	//短信验证码登录
	async user_loginBySmsCode(userForm) {

	},
	//一键登录
	async user_loginByApp(userForm) {

	},
	//账号注册验证邮件与验证码
	async user_validEmailAndCode(email, emailCode, emailCodeTk) {

	},
	// 账号注册
	async user_register(user) {

	},
	//修改密码
	async user_updatePassword(password, originPassword) {

	},
	async user_updateEmail(email, emailCode, emailCodeTk) {

	},
	async user_validUpdatePhone(phone){},
	//修改绑定手机号
	async user_updatePhone(userForm) {

	},
	//根据token获取用户信息
	async user_getUser() {

	},
	//邮箱验证码重置密码
	async user_resetPasswordByEmailCode(email, emailCode, emailCodeTk, password) {},
	async user_sendSms(phone,tempType) {

	},
	async user_closeAccount() {

	},
	async user_getPermission(hotel_id) {

	},
	async room_addRoom(roomList) {

	},
	async room_updateRoom(room) {

	},
	async room_getRemainderRoomList() {

	},
	async room_deleteRoom(_id) {

	},
	async hotel_createHotel(hotelObj) {

	},
	async hotel_updateHotel(hotel_id, hotelObj) {

	},
	async hotel_deleteHotel(hotel_id) {

	},
	async hotel_getHotelList() {

	},
	async order_addOrder(orderObj) {

	},
	async order_deleteOrder(_id) {

	},
	async roomType_addRoomType(roomType) {

	},
	async roomType_deleteRoomType(roomTypeId) {

	},
	async roomType_updateRoomType(roomType) {

	},
	async roomType_getRoomType(hotel_id) {

	},
	async getRoomTypeIncludeRoomList(hotel_id) {

	},
	async roomType_getRemainderRoomType(params) {

	},
	async fm_add(fm) {},
	async fm_deleteFm(_id) {},
	async sendEmailCode(email, tempKey) {},
	async employee_addEmployee(employeeObj) {},
	async employee_editEmployee(employeeObj) {},
	async employee_deleteEmployee(employee_id) {},
	...hotel,
	...order,
	...linen,
	...user,
	...room,
	...roomType,
	...employee,
	...menu,
	...scenicSpot,
	...fm,
	...config,
	...utils,
	...email
}