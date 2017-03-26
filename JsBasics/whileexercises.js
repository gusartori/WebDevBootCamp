// 1
var counter = -10;
console.log("Problem 1");
while (counter <= 19){
	console.log(counter);
	counter++;
}

// 2
counter = 10;
console.log("Problem 2");
while (counter <= 40){
	if(counter%2 === 0){
		console.log(counter);
	}
	counter++;
}

// 3
counter = 300;
console.log("Problem 3");
while (counter <= 333){
	if(counter%2 !== 0){
		console.log(counter);
	}
	counter++;
}

// 4
counter = 5;
console.log("Problem 4");
while (counter <= 50){
	if(counter%5 === 0 && counter%3 === 0){
		console.log(counter);
	}
	counter++;
}