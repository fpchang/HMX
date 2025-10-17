'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('get config event : ', event);
	const {spaceId} =context.SPACEINFO;
	//context.SPACEINFO.spaceId=="env-00jxh1m2dpmq";
	
	//返回数据给客户端
	console.log("环境配置文件", config[spaceId]);
	return config[spaceId];
};
 var config ={
		//开发环境
		"env-00jxh1m2dpmq":{
			hostName:"http://hmdev.hotelsys.fun",
			cloudUrl:"https://env-00jxh1m2dpmq.normal.cloudstatic.cn",
			miniProgramKey:"a69cc73276ceb1a813f3be0d5d42c2aa"
		},
		//生产环境
		"env-00jxhfhjd231":{
			hostName:"http://hm.hotelsys.fun",
			cloudUrl:"https://env-00jxhfhjd231.normal.cloudstatic.cn",
			miniProgramKey:"a69cc73276ceb1a813f3be0d5d42c2aa"
		}
		
}
