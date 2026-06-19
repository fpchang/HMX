const utils = require('../utils/index.js');

module.exports = {
	async config_getConfig(event) {
		console.log('config_getConfig : ', event);
		const { spaceId } = this.getClientInfo().SPACEINFO;
		console.log("环境配置文件", config[spaceId]);
		return config[spaceId];
	}
}

var config = {
	"env-00jxh1m2dpmq": {
		hostName: "http://hmdev.hotelsys.fun",
		cloudUrl: "https://env-00jxh1m2dpmq.normal.cloudstatic.cn",
		miniProgramKey: "a69cc73276ceb1a813f3be0d5d42c2aa",
		txmapkey: "I6DBZ-AY3CC-XHY2K-AJFAN-WAZ7K-XXBWU"
	},
	"env-00jxhfhjd231": {
		hostName: "http://hm.hotelsys.fun",
		cloudUrl: "https://env-00jxhfhjd231.normal.cloudstatic.cn",
		miniProgramKey: "a69cc73276ceb1a813f3be0d5d42c2aa",
		txmapkey: "I6DBZ-AY3CC-XHY2K-AJFAN-WAZ7K-XXBWU"
	}
}
