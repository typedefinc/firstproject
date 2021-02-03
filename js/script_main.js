const letters = 'ABCdIFghijklMNopQrStuvWxYz'
let sum = 0;
for(let i in letters){
	if(letters[i]==letters[i].toUpperCase()){
		sum+=i*2;
	}else{
		sum+=Math.round(i/3);
	}
}
console.log(sum);