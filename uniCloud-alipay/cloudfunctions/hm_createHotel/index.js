'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {
		hotelObj
	} = event;
	console.log("hm-createHotel", event);
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	//开启事务
	//const transaction = await dbJQL.startTransaction()
	try{
		const validstr = validHotel(hotelObj);
		if(validstr!=""){
			return {code:10,message:validstr};
		}
		const result = await  dbJQL.collection('hm-hotel').add(foramtHotel(hotelObj));
		const employeeForm={
			    "employee_name": "店主",
			    "hotel_id": result.id,
			    "phone":hotelObj.belong,
			    "role": "administrator"
		}
		await  dbJQL.collection('hm-employee').add(employeeForm);
		//await transaction.commit();
		 return {code:0,message:""};
		
	}catch(e){
		//transaction.rollback();
		throw new Error(e);
	}

};
function validHotel(hotel){
	return "";
}
function foramtHotel(hotel){
	return {
	  belong:hotel['belong']??"",
	  dataStatus:0,
	  onlinePayment:false,
	  hotelCoordinate:hotel['hotelCoordinate']??[],
	  hotelIntroduction:hotel['hotelIntroduction']??"",
	  hotelName:hotel['hotelName']??"",
	  firstImages:hotel['firstImages']??"",
	  imagesList:hotel['imagesList']??[],
	  athleticFacility:hotel['athleticFacility']??[],
	  cateringServices:hotel['cateringServices']??[],
	  feature:hotel['feature']??[],
	  hotelAddress:hotel['hotelAddress']??"",
	  hotelAddressArea:hotel['hotelAddressArea']??"",
	  hotelAddressCode:hotel['hotelAddressCode']??"",
	  recreationFacility:hotel['recreationFacility']??[],
	  serviceTel:hotel['serviceTel']??"",
	  wechat:hotel['wechat']??""
	  }
}