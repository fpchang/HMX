import{DB} from '../api/DB';
class MineServiceClass{
	constructor(){
        this.DB=DB;
    }
    //添加意见反馈
    add(feedbackObj){
       return  DB.callFunction("hm_addFeedback",{feedbackObj});
    }
   
}
//module.exports =new MineService();
export var MineService=new MineServiceClass();