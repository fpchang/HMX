function caculate(initnum,bs,n){
	
				let count=0;
				let lastNum=initnum*(bs**(n-1));
				for(let i=0;i<n;i++){
					count+=initnum*(bs**i);
				}
				let beforeNum = count-lastNum;
				let cost=count*2;
				let get = lastNum*5;
				return {count,beforeNum,lastNum,cost,get};
			}
			
	
//
console.log(caculate(1,2,90));