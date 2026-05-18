module.exports = {
	hotel_validHotel(hotel) {
		return "";
	},
	hotel_foramtHotel(hotel) {
		if (!hotel) {
			return {};
		}
		let result = {
			...hotel
		};
		if (result.hasOwnProperty("curRole")) {
			delete result['curRole'];
		}
		return {
			ownership_id: hotel["ownership_id"] ?? "--",
			belong: hotel['belong'] ?? "",
			dataStatus: 0,
			onlinePayment: false,
			hotelCoordinate: hotel['hotelCoordinate'] ?? [],
			hotelIntroduction: hotel['hotelIntroduction'] ?? "",
			hotelName: hotel['hotelName'] ?? "",
			firstImages: hotel['firstImages'] ?? "",
			imagesList: hotel['imagesList'] ?? [],
			athleticFacility: hotel['athleticFacility'] ?? [],
			cateringServices: hotel['cateringServices'] ?? [],
			feature: hotel['feature'] ?? [],
			hotelAddress: hotel['hotelAddress'] ?? "",
			hotelAddressArea: hotel['hotelAddressArea'] ?? "",
			hotelAddressCode: hotel['hotelAddressCode'] ?? "",
			recreationFacility: hotel['recreationFacility'] ?? [],
			serviceTel: hotel['serviceTel'] ?? "",
			wechat: hotel['wechat'] ?? ""
		}
	}
}