class FmAction{
	constructor(ctx){
		this.ctx=ctx;
	}
	async add(fm){
		const fmObj = {
			amount: parseFloat(fm.amount.toString()),
			billType: fm.billType,
			creater: fm.creater,
			hotel_id: fm.hotel_id,
			ioeTime: fm.ioeTime,
			type: fm.type,
			mark: fm.mark
		}
		const db = uniCloud.databaseForJQL();
		try {
			const res =  await db.collection("hm-incomeAndExpenses").add(fmObj);
			return res;
		} catch (error) {
			throw new Error("add inclome or expenses order fail");
		}
	
	}
}
module.exports = {FmAction};