let calculation =  new Calculation();

function init() {
	initDisplay();
}

function add(char){
	calculation.add(char);
	addToDisplay(char);
}

function calculate() {
	console.log("Calculating");
	calculation.getResult();
}

function back() {
	calculation.remove();
	removeFromDisplay();
}