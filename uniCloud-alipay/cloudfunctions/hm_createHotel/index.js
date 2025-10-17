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
		const result = await  dbJQL.collection('hm-hotel').add(hotelObj);
		const employeeForm={
			    "employee_name": "店主",
			    "hotel_id": result.id,
			    "phone":hotelObj.belong,
			    "role": "administrator"
		}
		await  dbJQL.collection('hm-employee').add(employeeForm);
		//await transaction.commit();
		return result;
		
	}catch(e){
		//transaction.rollback();
		throw new Error(e);
	}

};
