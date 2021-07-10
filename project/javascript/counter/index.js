//document.getElementById("count-el").innerText=5



//let firstBatch=5
//let secondBatch=7
//let count = firstBatch + secondBatch
//console.log(count) 

let countEl=document.getElementById("count-el")
console.log(countEl)

count=0
function increment(){
	console.log("incremented")
	count=count+1
	//document.getElementById("count-el").innerText=count is what next line does
	countEl.innerText=count
}

let saveEl=document.getElementById("save-el")
console.log(saveEl)
function save(){
	console.log("saved")
	//saveEl.innerText=saveEl.innerText+count+" - "
	//to solve the hidden space problem,we use the line below
	saveEl.textContent = saveEl.textContent+count+" - "
	countEl.innerText=0
	count=0
}



