'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('getMpPhoneNumber : ', event);
	const {code,appid,secret} = event;
	const accessToken = await getAccessToken(appid,secret);
	const url=`https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=${accessToken}`; 
	console.log("url",url);
	try {
		const res = await uniCloud.request({url:url,method: 'POST',data:{code}});
		const phone  =res.data.phone_info.phoneNumber;
		console.log("获取的手机号信息",res);
		return phone;
	} catch (error) {
		throw new  Error("getMpPhoneNumber Error");
	}
	
};

async function getAccessToken(appid,secret){
	
	const url =`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret} `
	try {
		const res = await uniCloud.request({url});
		console.log("getAccessToken",res);
		const {access_token} = res.data;
		return access_token;
	} catch (error) {
		throw new  Error("getAccessToken Error");
	}
	
}