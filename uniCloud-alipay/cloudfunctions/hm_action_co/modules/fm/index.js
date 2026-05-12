const fmDelete = require('./fm-delete.js');
const fmTask = require('./fm-task.js');
const fmPay = require('./fm-pay.js');
const fmRecharge = require('./fm-recharge.js');
const fmConfig = require('./fm-config.js');

module.exports = {
	...fmDelete,
	...fmTask,
	...fmPay,
	...fmRecharge,
	...fmConfig
}