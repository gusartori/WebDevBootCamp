var numberSq = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var messageDisp = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBt = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberSq = 3;
			} else {
				numberSq = 6;
			}
			reset();
		});
	}
}

function setupSquares(){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].addEventListener("click", function (){
			var clickedColor = this.style.background;
			if(pickedColor === clickedColor){
				messageDisp.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.background = pickedColor;
				resetBt.textContent = "Play Again?"
			} else {
				this.style.background = "#232323";
				messageDisp.textContent = "Try Again";
			}
		})
	}
}

function reset(){
	resetBt.textContent = "New colors";
	colors = generateRandomColors(numberSq);
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	messageDisp.textContent = "";
}

resetBt.addEventListener("click", function () {
	reset();
});

function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")"; 
}