let calculation =  new Calculation();

function init() {
	initDisplay();
}

function add(char){
	addToDisplay(char);
	calculation.add(char);
}

function calculate() {
	console.log("Calculating");
	calculation.getResult();
}

function back() {
	calculation.remove();
	removeFromDisplay();
}