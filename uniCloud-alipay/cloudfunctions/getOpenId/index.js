'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	const {code,appId,secret} =event;
	let url=`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
	const res =await uniCloud.httpclient.request(url,{
		dataType:"json"
	})
	//返回数据给客户端
	return {res}
};
