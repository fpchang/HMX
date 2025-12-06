import {kl8_data} from "./kl8_data.js";
import {getSpecifiedLengthCombinations,sortObjectByNumberValue,sortObjectArrayByNumberValue} from "./math.js"
const history= kl8_data;
const BALL=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
function getRandomRedBall(len=80){
	let result = [];
	while(result.length<20){
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
	let s={};
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
		//console.log(`与前${n}期比较有${result}个球重复-index${historyList[i].index}`);
		if(result<1){
			//console.log(`前${n}期组合为：：`,groupRedBall_);
			//console.log(`当期为：：`,historyList[i].index);
			//console.log(`与前${n}期比较有${result}个球重复-index${i}`);
		}
		if(s[result]){
			s[result]++;
		}else{
			s[result]=1;
		}
		
		//console.log("--------------");
		
	}
	console.log(`统计结果：${historyList.length}期与前== ${n}期重复结果 ==`,s)
}
//比较随机与前n期重复数量
function compare(list =[],listHistory=[]){
	let groupList =[]
	for(let i=0;i<listHistory.length;i++){
		groupList.push(...listHistory[i].redBall)
	}
	groupList = [...new Set(groupList)];
	//console.log("groupList",groupList);
	let newList = [...groupList,...list];
	newList=[...new Set(newList)];
	//console.log("newList",newList);
	return list.length+groupList.length-(newList.length);
}
//获取数据组合去重排序
function getGroupList(listHistory){
	let groupList =[]
	for(let i=0;i<listHistory.length;i++){
		groupList.push(...listHistory[i].redBall)
	}
	groupList = [...new Set(groupList)];
	groupList.sort((a,b)=>a-b);
	return groupList;
}
//console.log(getRandomRedBall());
//sameHistory(2,history);
//与所有历史数据相比
function S0(list,history){
	let result =true;
	
	for(let i=0;i<history.length;i++){
		 let newList = new Set([...history[i].redBall,...list]);
		 if(newList.size<8){
			// console.log("repeat and:"+history[i].index);
			 result=false;
			 break;
		 }
	}
	
	return result;
	
}
//红球算法 与前几期比较
//前1期重复【2，8】
//前2期重复【6，11】
//前3期重复【9，14】
//前4期重复【11，16】
//前5期重复【13，19】
//前6期重复【15，19】
//前7期重复【16，19】
//前8期重复【17，20】

function S1(list,history){
	let count1 = compare(list,history.slice(history.length-1));
	let count2 = compare(list,history.slice(history.length-2));
	let count3 = compare(list,history.slice(history.length-3));
	let count4 = compare(list,history.slice(history.length-4));
	let count5 = compare(list,history.slice(history.length-5));
	let count6 = compare(list,history.slice(history.length-6));
	let count7 = compare(list,history.slice(history.length-7));
	let count8 = compare(list,history.slice(history.length-8));
	//console.log("count:",count1,count2,count3,count4,count5);
	const s1=count1>1&&count1<9;
	const s2=count2>5&&count2<12;
	const s3=count3>8&&count3<15;
	const s4=count4>10&&count4<17;
	const s5=count5>12&&count4<20;
	const s6=count6>14&&count4<20;
	const s7=count7>15&&count4<20;
	const s8=count8>16;
	if(s1&s2&&s3&&s4&&s5&&s6&&s7&&s8){
		return true
	}
	return false;
}
function S1_stat(list){
	let s={};
	for(let i=0;i<list.length;i++){
		let arr =list[i].redBall;
		for(let j=0;j<arr.length;j++){
			if(s[arr[j].toString()]){
				s[arr[j].toString()]++;
			}else{
				s[arr[j].toString()]=1
			}
		}
		
	}
	return s;
}
//红球冷号
/**
 * @param {Object} list
 * @param {Object} history
 * 1,与前2期 只有0个号重复--6/137
 * 2，与前3期只1个号重复 12/137
 * 3，前4期只有一个号 重复4/137
 * 4,
 */
function S2(list,history){
	let count2 = compare(list,history.slice(history.length-2));
	let count3 = compare(list,history.slice(history.length-3));
	let count4 = compare(list,history.slice(history.length-4));
	let count7 = compare(list,history.slice(history.length-7));
	if(count4==0&&count7<3){
		
		return true;
	}
	return false;
}
//红球绝杀爆冷号
/**
 * @param {Object} list
 * @param {Object} history
 * 1,与前2期 只有0个号重复--6/137
 * 2，与前3期只1个号重复 12/137
 * 3，前4期只有一个号 重复4/137
 * 4,
 */
function S3(list,history){
	let count2 = compare(list,history.slice(history.length-2));
	let count3 = compare(list,history.slice(history.length-3));
	let count4 = compare(list,history.slice(history.length-4));
	let count5 = compare(list,history.slice(history.length-5));
	let count7 = compare(list,history.slice(history.length-7));
	if(count5==0&&count7<3){
		
		return true;
	}
	return false;
}
//计算历史开奖中中奖率最高的组合
//n 代表买几，1-10
function S5(n=4,minNum=5){
	console.log(BALL.length)
	const list = getSpecifiedLengthCombinations(BALL, n);
	//console.log('示例1：[1,2,3] 长度2的组合 →', example1);
	//const list=[[43,44]];
	let result={}
	for(let i=0;i<list.length;i++){
		let g=list[i];
	
		for(let j=0;j<history.length;j++){
			let arr =history[j].redBall;
			let repeatCount = g.length+arr.length - new Set([...arr,...g]).size;
				//console.log("repeatCount",repeatCount);
			if(repeatCount==n){
				let index = g.toString();
				
				if(result[index]){
				
					result[index]++;
				}else{
					
					result[index]=1
				}
			
			}
			
		}
	}
	let listArray = sortObjectByNumberValue(result);
	listArray=listArray.filter(item=>item[1]>minNum);
	console.log(listArray)
	return listArray;
}
function caculate(fn,n=20){
	

	let thread=0;
	let result =[];
	while(thread<n){
		let list =getRandomRedBall();		
		if(fn(list,history)){
			result.push({redBall:list})
			thread++;
		}
	}
	return result;
}
//结果 与前2期最多重复2，与前3期最多重复3,前4期最多3
//console.log(caculate());
///sameHistory(1,history);
//let flag = S1([ 8, 10, 14, 23, 28, 32 ],history);
//console.log(flag);
//将2024年双色球61到90期开奖结束整理成json格式，要全部开奖数据升序排列，生成附件
//  sameHistory(1,history);
// sameHistory(2,history);
// sameHistory(3,history);
// sameHistory(4,history);
// sameHistory(5,history);
// sameHistory(6,history);
// sameHistory(7,history);
// sameHistory(8,history);
// sameHistory(9,history);
// sameHistory(10,history);
// sameHistory(11,history);

// const c4=getGroupList(history.slice(history.length-4));
// const c5=getGroupList(history.slice(history.length-5));
// const c6=getGroupList(history.slice(history.length-6));
// console.log(new Set(c4),new Set(c5),new Set(c6));
// const list=caculate(S1,18);
// console.log(list);
// console.log(S1_stat(list));
 // '52,61,72,80': 7,
 //  '54,70,72,74': 7,
 //  '7,21,46,59': 8,
 //  '8,10,47,54': 8,
 //  '8,11,15,20': 8,
 //  '8,15,54,56': 8,
 //  '8,15,65,80': 8,
 //  '10,38,52,71': 8,
 //  '13,43,47,61': 8,
 //  '15,18,54,74': 8,
 //  '15,28,48,70': 8,
 //  '15,54,72,74': 8,
 //  '16,23,79,80': 8,
 //  '16,38,62,71': 8,
 //  '19,33,35,59': 8,
 //  '20,48,53,68': 8,
 //  '21,40,58,65': 8,
 //  '22,34,37,55': 8,
 //  '22,34,46,50': 8,
 //  '26,69,72,80': 8,
 //  '28,33,34,37': 8,
 //  '12,53,68,80': 9,
 //  '22,34,50,52': 9
//set NODE_OPTIONS=--max-old-space-size=4096
S5(4,5);