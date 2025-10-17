'use strict';
exports.main = async (event, context) => {
	console.log('111111111111111111111',event)
	//event为客户端上传的参数
	const {point=[113.3089506, 23.0968251],maxDistance=30000}={event};
	const db = uniCloud.database();
	const $ = db.command.aggregate;
	console.log('aaaa',event)
	let res = await db.collection('hm-hotel').aggregate().geoNear({
	    distanceField: 'distance', // 输出的每个记录中 distance 即是与给定点的距离
	    spherical: true,
	    near: new db.Geo.Point(point[0], point[1]),
		maxDistance:1000,
		minDistance:0,
	    // query: {
	    //   docType: 'geoNear',
	    // },
	    key: 'hotelCoordinate' // 若只有 location 一个地理位置索引的字段，则不需填
	    //includeLocs: 'location', // 若只有 location 一个是地理位置，则不需填
	  }).end()
	return res
};
