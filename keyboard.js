document.addEventListener('keydown', type);

var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ",", ".", "Backspace", "Enter"];

function type(e) {
	console.log(e);
	if (keys.includes(e.key)) {
		if (e.key == ",") {
			add(".");
		} else if (e.key == "Backspace") {
			back();
		} else if (e.key == "Enter") {
			calculate();
		} else {
			add(e.key);
		}
	}
}