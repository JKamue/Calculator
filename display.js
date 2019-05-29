var result = false;

function initDisplay() {
	display = document.getElementById("display");
}

function addToDisplay(character) {
	if(result) {
		clearDisplay();
		result = false;
		display.style.textAlign = "left";
	}
	display.innerHTML += character;
}

function removeFromDisplay() {
	if(result) {
		clearDisplay();
	} else {
		text = display.innerHTML;
		display.innerHTML = text.substring(0, text.length-1);
	}
}

function clearDisplay() {
	display.innerHTML = "";
}