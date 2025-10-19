import{DB} from '../api/DB';
class AccountServiceClass{
	constructor(){
        this.DB=DB;
        this.validTokenRequest=null;
    }

  getConfig(){
    return DB.callFunction("hm_getConfig") ;
  }  
  validToken(){
    const token = uni.getStorageSync('hm_token');
    return DB.callFunction("hm_validToken") ;
  }
  login(userForm){    
    return DB.callFunction("hm_login", { userForm})
  }
  /**
   * 注销账号
   */
  closeAccount(){
    return DB.callFunction("hm_closeAccount") ;
  }
  recoverAccount(_id){
    return DB.update("hm-user",_id,{accountStatus:1})
  }
  getuserByToken(){
    return DB.getCollection("hm-user",{hm_token:uni.getStorageSync("hm_token")});
  }
  updateUserName(_id,userName){
    return DB.update("hm-user",_id,{userName});
  }
  getRechargeConfig(){
	   return DB.getCollection("hm-rechargeConfig",{status:true});
  }
  createRechargeOrder(rechargeConfig_id){
	  return DB.callFunction("hm_createRechargeOrder",{rechargeConfig_id});
  }

  getMpPhoneNumber(code){
     return DB.callFunction("getMpPhoneNumber",{code});
  }
  loginMp(code){
    return DB.callFunction("hm_loginMp",{code});
  }
}
//module.exports =new AccountService();
export var AccountService=new AccountServiceClass();