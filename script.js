//your code here
let priceList=document.querySelectorAll(".price")
let table = document.querySelector("table");
function func(){
	let sum=0;
	priceList.forEach((e)=>{
		sum += +e.innerText
	})
	let tr= document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText="Total";
	let td2=document.createElement("td");
    td2.innerText=sum;
	//td2.data-ns-test="grandTotal"
	tr.appendChild(td1);
	tr.appendChild(td2);
	table.appendChild(tr);

}

func()