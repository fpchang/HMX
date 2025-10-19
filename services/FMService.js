import{DB} from '../api/DB';
class FMServiceClass{
	constructor(){
        this.DB=DB;
        this.validTokenRequest=null;
    }

  add(item){
    return DB.add("hm-incomeAndExpenses",item) ;
  }
  //房费统计按店铺分类
  getRoomOrder(hotel_id,st,et){
    const db = uniCloud.database();
      const s1 = `hotel_id=='${hotel_id}'&&orderStatus==5`;
      const s2 = `checkInStartDateTimeStamp>=${st}&&checkInStartDateTimeStamp<${et}`;
      let w = `${s1}&&${s2}`;
     
    return  db.collection("hm-order").where(w).groupBy('hotel_id').groupField('sum(totalAmount) as amount').get()
  }
    //房费统计月分组统计
    getRoomOrderOrderByMonth(hotel_id,st,et){
      const db = uniCloud.database();
        const s1 = `hotel_id=='${hotel_id}'&&orderStatus==5`;
        const s2 = `checkInStartDateTimeStamp>=${st}&&checkInStartDateTimeStamp<${et}`;
        let w = `${s1}&&${s2}`;
       
      return  db.collection("hm-order").where(w).groupBy('dateToString(timestampToDate(checkInStartDateTimeStamp),"%Y-%m") as month').groupField('sum(totalAmount) as amount').get()
    }
  //获取收入与支出分类
  getIncomeAndExpenses(hotel_id,billType='income',st,et){
    const db = uniCloud.database();
    const dbCmd = db.command;
    const w = {
      hotel_id:hotel_id,
      billType:billType,
      ioeTime:dbCmd.and(dbCmd.gte(st),dbCmd.lte(et))
    }
    const res =db.collection("hm-incomeAndExpenses").where(w).groupBy(' type as name').groupField('sum(amount) as value').get();
    return res
    
  }
   //按月统计
  getIncomeAndExpensesByMonth(hotel_id,billType='income',st,et){
    const db = uniCloud.database();
    const dbCmd = db.command;
    const w = {
      hotel_id:hotel_id,
      billType:billType,
      ioeTime:dbCmd.and(dbCmd.gte(st),dbCmd.lte(et))
    }
    const res =db.collection("hm-incomeAndExpenses").where(w).groupBy(' dateToString(timestampToDate(ioeTime),"%Y-%m-%d") as month').groupField('sum(amount) as value').get();
    return res
  }

  //获取当月收入统计
 async  getIncomeCurrentMonth(hotel_id){
    const db = uniCloud.database();
    const dbCmd = db.command;
    const monthFirst =new Date(new Date().getFullYear(),new Date().getMonth(),1).getTime();
		const monthLast =new Date(new Date().getFullYear(),new Date().getMonth()+1,1).getTime()-1;
    const w = {
      hotel_id:hotel_id,
      billType:'income',
      ioeTime:dbCmd.and(dbCmd.gte(monthFirst),dbCmd.lte(monthLast))
    }
    //房费
    const order = this.getRoomOrder(hotel_id,monthFirst,monthLast);
    const mt = db.collection("hm-incomeAndExpenses").where(w).getTemp()
    const other =db.collection(mt,"hm-incomeAndExpensesConfig").groupBy('type').groupField('sum(amount) as value').get();
    
    
    const res = await Promise.all([order,other]);
    let arr =[];
    res[1].result.data.map(item=>{
      arr.push({name:item.type[0].text,value:item.value})
    })
    if(res[0].result.data.length){
      arr.push({name:"房费",value: res[0].result.data[0]['amount']})
    }
  
    return arr;
  }
 

  //获取当月支出统计
  async  getExpensesCurrentMonth(hotel_id){
    const db = uniCloud.database();
    const dbCmd = db.command;
    const monthFirst =new Date(new Date().getFullYear(),new Date().getMonth(),1).getTime();
		const monthLast =new Date(new Date().getFullYear(),new Date().getMonth()+1,1).getTime()-1;
    const w = {
      hotel_id:hotel_id,
      billType:'expenses',
      ioeTime:dbCmd.and(dbCmd.gte(monthFirst),dbCmd.lte(monthLast))
    }
   
    const mt = db.collection("hm-incomeAndExpenses").where(w).getTemp()
    const res =await db.collection(mt,"hm-incomeAndExpensesConfig").groupBy('type').groupField('sum(amount) as value').get();
      let arr =[];
    res.result.data.map(item=>{
      arr.push({name:item.type[0].text,value:item.value})
    })
    return arr;
  }
  //获取当年收入统计
async getIncomeCurrentYear(hotel_id){
  const db = uniCloud.database();
  const dbCmd = db.command;
  const yearFirst = new Date(new Date().getFullYear(),0,1).getTime();
  const yearLast = 	new Date(new Date().getFullYear(),12,1).getTime()-1;
  const w = {
    hotel_id:hotel_id,
    billType:'income',
    ioeTime:dbCmd.and(dbCmd.gte(yearFirst),dbCmd.lte(yearLast))
  }
  //房费
  const order = this.getRoomOrderOrderByMonth(hotel_id,yearFirst,yearLast);
  const mt = db.collection("hm-incomeAndExpenses").where(w).getTemp();
  const other =db.collection(mt,"hm-incomeAndExpensesConfig").groupBy('dateToString(timestampToDate(ioeTime),"%Y-%m") as month').groupField('sum(amount) as amount').get(); 
  const res = await Promise.all([order,other]);
  let xlable=[],simpleXLabel=[],xValue=[],total=0;

  for(let i=0;i<12;i++){
    let xmonth = new Date(new Date().getFullYear(),i).Format("yyyy-MM");
     let simounth=new Date(new Date().getFullYear(),i).Format("MM");
    let orderItem=res[0].result.data.find(item=>item.month==xmonth),
      otherItem= res[1].result.data.find(item=>item.month==xmonth);
      let val = (orderItem&&orderItem['amount']||0)+(otherItem&&otherItem['amount']||0);
      simpleXLabel.push(simounth);
    xlable.push(xmonth);
    xValue.push(val);
    total+=val;

  }
    total=total.toFixed(2);
  //console.log(xlable,xValue)
  return {
    xlable,
    simpleXLabel,
    xValue,
    total
  };
}
  //获取当年支出统计
async getExpensesCurrentYear(hotel_id){
  const db = uniCloud.database();
  const dbCmd = db.command;
  const yearFirst = new Date(new Date().getFullYear(),0,1).getTime();
  const yearLast = 	new Date(new Date().getFullYear(),12,1).getTime()-1;
  const w = {
    hotel_id:hotel_id,
    billType:'expenses',
    ioeTime:dbCmd.and(dbCmd.gte(yearFirst),dbCmd.lte(yearLast))
  }

  const mt = db.collection("hm-incomeAndExpenses").where(w).getTemp();
  const res =await db.collection(mt,"hm-incomeAndExpensesConfig").groupBy('dateToString(timestampToDate(ioeTime),"%Y-%m") as month').groupField('sum(amount) as amount').get(); 
  let xlable=[],simpleXLabel=[],xValue=[],total=0;

  for(let i=0;i<12;i++){
    let xmonth = new Date(new Date().getFullYear(),i).Format("yyyy-MM");
    let simounth=new Date(new Date().getFullYear(),i).Format("MM");
      let otherItem= res.result.data.find(item=>item.month==xmonth);
      let val = otherItem&&otherItem['amount']||0;
    simpleXLabel.push(simounth);
    xlable.push(xmonth);
    xValue.push(val);
    total+=val;

  }
  //console.log(xlable,xValue)
    total=total.toFixed(2);
  return {
    xlable,
    simpleXLabel,
    xValue,
    total
  };
}
}


//module.exports =new AccountService();
export var FMService=new FMServiceClass();