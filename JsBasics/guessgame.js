var result = false;
var number;
var answer = 7;
while (!result){
	number = Number(prompt("Guess the number!"));
	if (number > answer){
		alert("Too high!");
	} else if (number < answer){
		alert("Too low!");
	} else {
		alert("You got it!");
		result = true;
	}
}

