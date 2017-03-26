var age = prompt("Whats your age?");
if (age<0){
	console.error("wrong answer");
} 
if (age==="21") {
	console.log("happy 21st bday");
}
if (age%2 !== 0){
	console.log("your age is odd");
}
if (age % Math.sqrt(age) === 0){
	console.log("your age is a perfect square")
}