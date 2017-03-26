var list = [];
var answer;

function addTodo(){
	var item = prompt("Write the item to add");
	list.push(item);
	console.log(item + " added to TODO list.");
}

function listTodos(){
	console.log("***********");
	list.forEach((x, i)=>console.log(i + " : " + x));
	console.log("***********");
}

function cleanTodos(){
	list = [];
	alert("List clean!")
}

function deleteTodo(){
	var index = prompt("Write the index of the item you would like to delete");
	list.splice(index,1);
	console.log("Todo is removed");
}

while (answer !== "quit") {
	answer = prompt("What would you like to do? (new/list/quit/clean/delete)");
	if (answer === "new"){
		addTodo();
	}
	else if (answer === "list"){
		listTodos();
	}
	else if (answer === "clean"){
		cleanTodos();
	}
	else if (answer === "delete"){
		deleteTodo();
	} else if (answer!=="quit"){
		alert("Wrong option! Try again");
	}
}