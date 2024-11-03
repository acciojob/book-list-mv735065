//your JS code here. If required.

// let outer=document.createElement('div');
let outer=document.querySelector("#outer");


let titleBox=document.querySelector("#title");
let authorBox=document.querySelector("#author");
let isbnBox=document.querySelector("#isbn");

let table=document.querySelector("#book-list");

let btn=document.querySelector("#submit");

btn.addEventListener('click',addBook);




function addBook() {
    let title=titleBox.value;
	let author=authorBox.value;
	let isbn=isbnBox.value;

	if(!title || ! author || !isbn) return ;

let row=document.createElement("tr");

	let td1=document.createElement("td");
	let td2=document.createElement("td");
	let td3=document.createElement("td");
	let td4=document.createElement("t4");
	
	

	td1.innerHTML=`${title}`;
	td2.innerHTML=`${author}`;
td3.innerHTML=`${isbn}`;
	let button=document.createElement("button");
	button.className = "delete"; 
	button.innerHTML="X";
	
	
	td4.append(button);

	row.append(td1);
	row.append(td2);
	row.append(td3);
	row.append(td4);
	
	table.append(row);

	button.addEventListener('click',()=>{
		row.remove();
	});
	 titleBox.value = '';
    authorBox.value = '';
    isbnBox.value = '';
	
}


