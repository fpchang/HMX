'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const appid ="wx1e656e3fd064719a";
	const secret='58ddb3617f26ed6bdd4b4117046ae7a8';
	const {code} =event;
	try {
		const resPhone = 	await uniCloud.callFunction({
			name:"getMpPhoneNumber",
			data:{appid,secret,code}
			
		});
		console.log("resPhone",resPhone);
		const res = await uniCloud.callFunction({
			name:"hm_login",
			data:{
				client:"MP",
				userForm:{phone:resPhone.result}
			}
		});
		return  {code:0,msg:"",data:{phone:resPhone.result,token:res.result.data.token}};
	} catch (error) {
		throw new Error("登录异常",error)
	}

	//返回数据给客户端
	return event
};
