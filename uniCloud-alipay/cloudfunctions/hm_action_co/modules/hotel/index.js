const HotelAction = require('./hotel-action.js');
const hotelCrud = require('./hotel-crud.js');
const hotelQuery = require('./hotel-query.js');
const hotelHelper = require('./hotel-helper.js');

module.exports = {
	...HotelAction,
	...hotelCrud,
	...hotelQuery,
	...hotelHelper
}