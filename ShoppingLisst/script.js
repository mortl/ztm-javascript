// // input.addEventListener("keydown", function (event) {
// //     if (input.value.length > 0 && event.key === "Enter") {

// //     }
// // })

// var button = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.getElementById("shoppingList");
// var myNodeList = document.querySelectorAll("li");

// function inputLength() {
//   return input.value.length;
// }

// function createListElement() {
//   var li = document.createElement("li");
//   var deleteBtn = document.createElement("button")
//   deleteBtn.textContent = "X";
//   li.appendChild(document.createTextNode(input.value));
//   li.appendChild(deleteBtn);
//   ul.appendChild(li);
//   input.value = "";
// }


// function crossOutItem(event){
//   if(event.target.tagName === "LI"){
//     event.target.classList.toggle('done');
//   }
// }

// function addItemAfterClick() {
//   if (inputLength() > 0) {
//     createListElement();
//   }
// }
// function addItemAfterKeypresss(event) {
//   if (inputLength() > 0 && event.key === "Enter") {
//     createListElement();
//   }
// }

// function deleteListItem(event) {}

// ul.addEventListener("click", crossOutItem,false );

// button.addEventListener("click", addItemAfterClick);

// input.addEventListener("keydown", addItemAfterKeypresss);


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Del';
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);