const redballAll =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
const history=[
	{
		redBall:[3,13,14,18,24,31],
		blueBall:[3]
	},
	{
		redBall:[4,8,10,21,23,32],
		blueBall:[11]
	},
	// {
	// 	redBall:[5,14,17,19,20,33],
	// 	blueBall:[7]
	// },
	// {
	// 	redBall:[3,5,9,13,26,29],
	// 	blueBall:[12]
	// },
	// {
	// 	redBall:[1,2,5,9,25,32],
	// 	blueBall:[10]
	// },
	]
function deletehistory(){
	let result =[];
	for(let item of history){
		//console.log(item.redBall)
		result.push(...item.redBall)
	}	
	result.sort((a,b)=>a-b);
	return  [...new Set(result)]
}
 function getOther(){
	 let dh=deletehistory();
	 let result =[];
	 for(item of redballAll){
		 if(!dh.includes(item)){
			 result.push(item)
		 }
	 }
	 return result;
 }
console.log(getOther());