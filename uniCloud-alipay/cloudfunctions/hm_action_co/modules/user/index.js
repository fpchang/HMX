const utils = require('../utils/index.js');


const userLogin = require('./user-login.js');
const userRegister = require('./user-register.js');
const userPassword = require('./user-password.js');
const userSms = require('./user-sms.js');
const userToken = require('./user-token.js');
const userInfo = require('./user-info.js');
const userValid = require('./user-valid.js');
const userLoginMp = require('./user-loginMp.js');
const userAdd = require('./user-add.js');

module.exports = {
	...userLogin,
	...userRegister,
	...userPassword,
	...userSms,
	...userToken,
	...userInfo,
	...userValid,
	...userLoginMp,
	...userAdd
}