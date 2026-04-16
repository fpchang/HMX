function caculate(firstsum=1,length=0){

	let list =[];
	for(let i=0;i<length;i++){
		if(i==0){
			list.push(firstsum);
			continue;
		}
		let countMoney = sum(list)*2;
		let x = Math.ceil(countMoney/3);
		list.push(x);
	}
	return list;
}
function sum(arr=[]){
	let s=0;
	arr.map(item=>{
		s+=item;
	});
	return s;
}
const result=caculate(2,60);
console.log("result",result);