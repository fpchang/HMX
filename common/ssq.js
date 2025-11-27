const redballAll =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
const history=[
	{
		index:2025117,
		redBall:[6,8,17,20,25,33],
		blueBall:[10]
	},
	{
		index:2025118,
		redBall:[1,10,11,16,24,26],
		blueBall:[3]
	},
	{
		index:2025119,
		redBall:[6,9,23,26,28,32],
		blueBall:[11]
	},
	{
		index:2025120,
		redBall:[1,22,4,7,13,32],
		blueBall:[7]
	},
	{
		index:2025121,
		redBall:[6,8,10,25,29,30],
		blueBall:[8]
	},
	{
		index:2025122,
		redBall:[16,18,19,20,25,31],
		blueBall:[13]
	},
	{
		index:2025123,
		redBall:[7,9,23,24,25,26],
		blueBall:[10]
	},
	{
		index:2025124,
		redBall:[1,2,18,19,21,33],
		blueBall:[13]
	},
	{
		index:2025125,
		redBall:[3,9,12,13,26,32],
		blueBall:[9]
	},
	{
		index:2025126,
		redBall:[2,12,13,16,19,25],
		blueBall:[10]
	},
	{
		index:2025127,
		redBall:[3,9,15,17,19,28],
		blueBall:[3]
	},
	{
		index:2025128,
		redBall:[2,10,18,19,24,27],
		blueBall:[1]
	},
	{
		index:2025129,
		redBall:[3,4,7,13,20,30],
		blueBall:[3]
	},
	{
		index:2025130,
		redBall:[1,5,8,14,19,23],
		blueBall:[6]
	},
	{
		index:2025131,
		redBall:[3,13,14,18,24,31],
		blueBall:[3]
	},
	{
		index:2025132,
		redBall:[4,8,10,21,23,32],
		blueBall:[11]
	},
	{
		index:2025133,
		redBall:[5,14,17,19,20,33],
		blueBall:[7]
	},
	{
		index:2025134,
		redBall:[3,5,9,13,26,29],
		blueBall:[12]
	},
	{
		index:2025135,
		redBall:[1,2,5,9,25,32],
		blueBall:[10]
	},
	{
		index:2025136,
		redBall:[8,10,14,23,28,32],
		blueBall:[12]
	},
	]
	//console.log(history.slice(history.length-13),history.length);
//随机一组彩票红球 33 双色球，35 大乐透
function getRandomRedBall(len=33){
	let result = [];
	while(result.length<6){
		const random = Math.ceil(Math.random()*len)
		let list =[...result];
		list.push(random);
		result= [...new Set(list)];
	}
	result.sort((a,b)=>a-b);
	return result;
}
//与历史开奖组合重合数量
function sameHistory(n=2,historyList=[]){
	const getGroupBall=(index)=>{
		let groupRedBall=[];
		for(let i=index-n;i<index;i++){
			groupRedBall.push(...historyList[i].redBall)
		}
		groupRedBall.sort((a,b)=>a-b);
		groupRedBall=new Set(groupRedBall);
		//console.log("groupRedBall",groupRedBall);
		return groupRedBall;
	}
	
	for(let i =n;i<historyList.length;i++){
		const grouplist = getGroupBall(i);
		//console.log("111",grouplist);
		const gsize=grouplist.size;
		let groupRedBall_=[...grouplist];
		groupRedBall_.push(...historyList[i].redBall);
		groupRedBall_=new Set(groupRedBall_);
		//console.log("groupRedBall_",groupRedBall_)
		let result = historyList[i].redBall.length-(groupRedBall_.size-gsize);
		//console.log("--------------");
		//console.log("groupRedBall",grouplist);
		//console.log("groupRedBall_",groupRedBall_)
		console.log(`与前${n}期比较有${result}个球重复-index${i}`);
		//console.log("--------------");
		
	}
}
//比较随机与前n期重复数量
function compare(list =[],listHistory=[]){
	let groupList =[]
	for(let i=0;i<listHistory.length;i++){
		groupList.push(...listHistory[i].redBall)
	}
	groupList = [...new Set(groupList)];
	console.log("groupList",groupList);
	let newList = [...groupList,...list];
	newList=[...new Set(newList)];
	//console.log("newList",newList);
	return list.length+groupList.length-(newList.length);
}
//console.log(getRandomRedBall());
//sameHistory(2,history);


function caculate(){
	
	let h =[{
		redBall:[1,2,5,9,25,32],
		blueBall:[10]
	},
	{
		redBall:[8,10,14,23,28,32],
		blueBall:[12]
	}];
	let thread=0;
	let result =[];
	while(thread<64){
		let list =getRandomRedBall();
		let count2 = compare(list,history.slice(history.length-2));
		let count3 = compare(list,history.slice(history.length-3));
		let count4 = compare(list,history.slice(history.length-4));
		if(count2<3&&count3<4&&count4<4){
			//console.log("---",list,"---")
			result.push({redBall:list})
			thread++;
		}
	}
	return result;
}
//结果 与前2期最多重复2，与前3期最多重复3,前4期最多3
console.log(caculate());
//sameHistory(4,history);