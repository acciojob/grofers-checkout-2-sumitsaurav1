//your code here
let priceList=document.querySelectorAll(".price")

function func(){
	let sum=0;
	priceList.forEach((e)=>{
		sum=sum+e.value
	})
}