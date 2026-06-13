class UserAction{
	constructor(ctx){
		this.ctx= ctx;
	}
	async addUser(userForm){
		let { userInfo } = event;
		console.log("user_addUser", event);
		const dbJQL = uniCloud.databaseForJQL()
		const addResult = await dbJQL.collection('hm-user').add(userInfo)
		return addResult;
	}
	async deleteUser(user_id){}
	async updateUser(userForm){}
	async getUser(){
		const dbJQL = uniCloud.databaseForJQL();
			const db = uniCloud.database();
			const field = "_id,isVip,nickName,phone,userName,avatar,closeAccountDateTime,account,email,accountStatus";
			const fieldObj = {
			    _id: true,
			    isVip: true,
			    nickName: true,
			    phone: true,
			    userName: true,
			    avatar: true,
			    closeAccountDateTime: true,
			    account: true,
			    email: true,
			    accountStatus: true
			};
			let w ={ hm_token: this.ctx.$token };
			console.log('w==',w)
			try {
				const res = await db.collection("hm-user").where(w).field(fieldObj).get();
				const user = res.data[0];
				console.log("user",user);
				if (!user) {
					throw new Error("未查到用户信息")
				}
				return res;
			} catch (error) {
				throw error;
			}
	}
	/**
	 * 账号注销
	 */
	async closeAccount() {
	
		const db = uniCloud.database();
		try {
			
			const { account_id } = this.ctx._tokenInfo;
			const time = Date.now();
			const hotelListRes = await db.collection("hm-hotel").where({ownership_id:account_id}).get();
			console.log("hotelList",hotelListRes);
			if(hotelListRes.data.length){
				return {errCode:998,errMsg:"please delete hotel before cancel your account ",data:{}}
			}
			const res = await db.collection("hm-user").where({ _id: account_id }).update({ accountStatus: 9, closeAccountDateTime: time });
			console.log("close account",res)
			return {code:0,errCode:0,errMsg:"",data:res.updated==1};
		} catch (e) {
			throw new Error(e)
		}
	}
}

module.exports = {UserAction};