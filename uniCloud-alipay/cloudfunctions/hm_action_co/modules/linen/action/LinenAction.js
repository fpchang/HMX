class linenAction{
	constructor(ctx){
		this.ctx= ctx;
	}
	async add(linenObj) {
		console.log("order_addOrder", linenObj);
		const db = uniCloud.databaseForJQL();
		const linen=this.formartLene(linenObj);
		try {
			const res = await db.collection('hm-linen').add(linen);
			return res;
		} catch (error) {
			throw new Error("add order fail");
		}		
	}
	async delete(_id) {
		const db = uniCloud.database();
		const res = await db.collection("hm-linen").doc(_id).update({ 'status': 10 });
		return res;
	}
	formartLene(obj){
		return {
			"hotel_id": obj.hotel_id,
			"service_provider":obj.service_provider,
			"flatsheet_max_num": obj.flatsheet_max_num,
			"flatsheet_mini_num": obj.flatsheet_mini_num,
			"duvetCover_max_num": obj.duvetCover_max_num,
			"duvetCover_mini_num":obj.duvetCover_mini_num,
			"bathTowel_num": obj.bathTowel_num,
			"faceTowel_num": obj.faceTowel_num,
			"floorTowel_num": obj.floorTowel_num,
			"bedRunner_num": obj.bedRunner_num,
			'pillowcase_num':obj.pillowcase_num,
			"flatsheet_max_back_num": obj.flatsheet_max_back_num,
			"flatsheet_mini_back_num":obj.flatsheet_mini_back_num,
			"duvetCover_max_back_num": obj.duvetCover_max_back_num,
			"duvetCover_mini_back_num": obj.duvetCover_mini_back_num,
			'pillowcase_back_num':obj.pillowcase_back_num,
			"bathTowel_back_num":obj.bathTowel_back_num,
			"faceTowel_back_num": obj.faceTowel_back_num,
			"floorTowel_back_num": obj.floorTowel_back_num,
			"bedRunner_back_num":obj.bedRunner_back_num,
			"mark": obj.mark
		}
	}
	
}
module.exports = {linenAction};