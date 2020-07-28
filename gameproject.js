var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messaggeDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
	}
}
	
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	 //add click listeners to square
	 squares[i].addEventListener("click", function(){
	 	//grav color to clicked square
	 	var clickedColor = this.style.backgroundColor;
	 	//compare color to pickedColor
	 	if(clickedColor === pickedColor){
	 		messaggeDisplay.textContent = "Correct!";
	 		resetButton.textContent =  "Play Again?";
	 		changeColor(clickedColor);
	 		h1.style.background = clickedColor;
	 	} else {
	 		this.style.backgroundColor = "#232323";
	 		messaggeDisplay.textContent = "Try Again"
	 	}
	 });
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplat to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messaggeDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random colors and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 -255
	var r = Math.floor(Math.random() * 256)
	//pick green
	var g = Math.floor(Math.random() * 256)
	//pick blue
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}