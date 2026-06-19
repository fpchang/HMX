 const isTestAccount =(phone = "", smsCode)=> {
		const testAccountList = [{
				phone: "18516285834",
				smsCode: "1234"
			},
			{
				phone: "13122905834",
				smsCode: "1234"
			},
			{
				phone: "19083441181",
				smsCode: "1234"
			},
			{
				phone: "19537884675",
				smsCode: "1234"
			},
			// {
			// 	phone: "13651694364",
			// 	smsCode: "1234"
			// }
		]
		let t = testAccountList.find(item => item.phone == phone);
		return t ? true : false;
	}
	module.exports={isTestAccount}