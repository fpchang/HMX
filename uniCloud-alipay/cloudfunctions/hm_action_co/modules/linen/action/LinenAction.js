class linenAction{
	constructor(ctx){
		this.ctx= ctx;
	}
	async add(linenObj) {
		
		const db = uniCloud.databaseForJQL();
		const linen=this.formartLene(linenObj);
		console.log("addlinen", linen);
		try {
			const res = await db.collection('hm-linen').add(linen);
			console.log("2222222",res)
			return {errCode:0,errMsg:"",data:true};
		} catch (error) {
			throw new Error("add linen fail",error);
		}		
	}
	async edit(linenObj) {
		console.log('111111',linenObj);
		const db = uniCloud.database();
		const _id = linenObj._id;
		if(!_id){
			return {errCode:20,errMsg:"_id is null",data:true};
		}
		const linen=this.formartLene(linenObj);
		console.log("editlinen",_id, linen);
		try {
			const res = await db.collection('hm-linen').doc(_id).update(linen);
			console.log("2222222",res)
			return {errCode:0,errMsg:"",data:true};
		} catch (error) {
			throw new Error("edit linen fail",error);
		}		
	}
	async lock(_id) {
		try {
			
			const db = uniCloud.database();
			const linenres = await db.collection("hm-linen").doc(_id).get();
			console.log("item=>",linenres)
			const linen = linenres['data'][0];
			if(!linen){
				return {errCode:320,errMsg:"未找到清洗单",data:false}
			}
			const comparePairs = [
			  ["flatsheet_max_num", "flatsheet_max_back_num"],
			  ["flatsheet_mini_num", "flatsheet_mini_back_num"],
			  ["duvetCover_max_num", "duvetCover_max_back_num"],
			  ["duvetCover_mini_num", "duvetCover_mini_back_num"],
			  ["pillowcase_num", "pillowcase_back_num"],
			  ["bathTowel_num", "bathTowel_back_num"],
			  ["faceTowel_num", "faceTowel_back_num"],
			  ["floorTowel_num", "floorTowel_back_num"],
			  ["bedRunner_num", "bedRunner_back_num"]
			]
			
			// data 是当前单据数据对象
			const hasDiff = comparePairs.some(([key1, key2]) => {
			  return linen[key1] !== linen[key2]
			})
			let status =1;
			if(hasDiff){
				status=9;
			}
			const res = await db.collection("hm-linen").doc(_id).update({ 'status':status });
			return {errCode:0,errMsg:"",data:res['updated']==1};
		} catch (error) {
			throw new Error(error)
		}
		
	}
	async delete(_id) {
		try {
			const db = uniCloud.database();
			const res = await db.collection("hm-linen").doc(_id).update({ 'status': 10 });
			return {errCode:0,errMsg:"",data:res['updated']==1};
		} catch (error) {
			throw new Error(error)
		}
	
	}
	formartLene(obj){
		console.log("format===",obj,this.ctx._tokenInfo)
		return {
			"hotel_id": obj.hotel_id,
			"service_provider":obj.service_provider,
			"flatsheet_max_num": parseInt(obj.flatsheet_max_num) ,
			"flatsheet_mini_num": parseInt(obj.flatsheet_mini_num) ,
			"duvetCover_max_num": parseInt(obj.duvetCover_max_num) ,
			"duvetCover_mini_num":parseInt(obj.duvetCover_mini_num) ,
			"bathTowel_num": parseInt(obj.bathTowel_num) ,
			"faceTowel_num": parseInt(obj.faceTowel_num) ,
			"floorTowel_num": parseInt(obj.floorTowel_num) ,
			"bedRunner_num": parseInt(obj.bedRunner_num) ,
			'pillowcase_num':parseInt(obj.pillowcase_num) ,
			"flatsheet_max_back_num": parseInt(obj.flatsheet_max_back_num) ,
			"flatsheet_mini_back_num":parseInt(obj.flatsheet_mini_back_num) ,
			"duvetCover_max_back_num": parseInt(obj.duvetCover_max_back_num) ,
			"duvetCover_mini_back_num": parseInt(obj.duvetCover_mini_back_num) ,
			'pillowcase_back_num':parseInt(obj.pillowcase_back_num) ,
			"bathTowel_back_num":parseInt(obj.bathTowel_back_num) ,
			"faceTowel_back_num": parseInt(obj.faceTowel_back_num) ,
			"floorTowel_back_num": parseInt(obj.floorTowel_back_num) ,
			"bedRunner_back_num":parseInt(obj.bedRunner_back_num) ,
			"mark": obj.mark
		}
	}
	
}
module.exports = {linenAction};