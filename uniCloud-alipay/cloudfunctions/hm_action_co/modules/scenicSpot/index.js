const scenicSpotAdd = require('./scenicSpot-add.js');
const scenicSpotAddDetail = require('./scenicSpot-addDetail.js');
const scenicSpotDelete = require('./scenicSpot-delete.js');
const scenicSpotDeleteDetail = require('./scenicSpot-deleteDetail.js');
const scenicSpotEdit = require('./scenicSpot-edit.js');
const scenicSpotEditDetail = require('./scenicSpot-editDetail.js');

module.exports = {
	...scenicSpotAdd,
	...scenicSpotAddDetail,
	...scenicSpotDelete,
	...scenicSpotDeleteDetail,
	...scenicSpotEdit,
	...scenicSpotEditDetail
}