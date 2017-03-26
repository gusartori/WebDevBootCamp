var answer = prompt("Are we there yet?");;
// while( !(answer==="yes" || answer === "yeah") ){
// 	answer = prompt("Are we there yet?");
// }

// while( !answer.includes("yes") ){
// 	answer = prompt("Are we there yet?");
// }

while( answer.indexOf("yes") === -1){
	answer = prompt("Are we there yet?");
}
alert("yay, we finally made it!");