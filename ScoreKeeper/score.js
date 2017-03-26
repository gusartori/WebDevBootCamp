var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var rsButton = document.querySelector("#rs");
var p1Disp = document.querySelector("#p1Disp");
var p2Disp = document.querySelector("#p2Disp");
var h1 = document.querySelector("h1");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var limitScore = 5;
var gameover = false;

p1Button.addEventListener("click", function (){
	if(!gameover){
		p1score++;
		if (p1score === limitScore) {
			gameover = true;
			p1Disp.classList.add("winner");
		}
		p1Disp.textContent = p1score;
	}
});

p2Button.addEventListener("click", function (){
	if(!gameover){
		p2score++;
		if (p2score === limitScore) {
			gameover = true;
			p2Disp.classList.add("winner");
		}
		p2Disp.textContent = p2score;
	}
});

rsButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	limitScore = Number(this.value);
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Disp.textContent = 0;
	p2Disp.textContent = 0;
	gameover = false;
	p1Disp.classList.remove("winner");
	p2Disp.classList.remove("winner");
}
