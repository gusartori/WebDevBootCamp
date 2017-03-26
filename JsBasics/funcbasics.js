function isEven(x){
	return x % 2 === 0;
}

function factorial(x){
	if(x === 0){
		return 1;
	}
	return factorial(x-1) * x;
}

function kebabToSnake(text){
	// if(text.indexOf("-") !== -1){
		return text.replace(/-/g, "_");
	// }
	// return text;
}

console.log("Is even: "+isEven(3));
console.log("Factorial: "+factorial(5));
console.log("Factorial: "+factorial(2));
console.log("Factorial: "+factorial(10));
console.log("Factorial: "+factorial(0));
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("algo-aqui-funciona"));
console.log(kebabToSnake("blah"));
