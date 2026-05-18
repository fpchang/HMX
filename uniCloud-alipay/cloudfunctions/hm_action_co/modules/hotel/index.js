
const hotelCrud = require('./hotel-crud.js');
const hotelQuery = require('./hotel-query.js');

module.exports = {
	...hotelCrud,
	...hotelQuery
}