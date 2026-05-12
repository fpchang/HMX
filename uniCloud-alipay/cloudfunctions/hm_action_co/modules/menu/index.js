const menuAddDetail = require('./menu-addDetail.js');
const menuAddType = require('./menu-addType.js');
const menuDeleteDetail = require('./menu-deleteDetail.js');
const menuDeleteType = require('./menu-deleteType.js');
const menuEditDetail = require('./menu-editDetail.js');
const menuEditType = require('./menu-editType.js');
const menuFeedback = require('./menu-feedback.js');

module.exports = {
	...menuAddDetail,
	...menuAddType,
	...menuDeleteDetail,
	...menuDeleteType,
	...menuEditDetail,
	...menuEditType,
	...menuFeedback
}