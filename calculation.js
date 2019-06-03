function Calculation() {
	this.string = "";
	
	this.add = function(char) {
		this.string += char;
	}		
	
	this.remove = function(char) {
		this.string = this.string.substring(0, this.string.length-1);
	}
	
	this.getResult = function() {
		try {
			display.innerHTML = eval(this.string);
		}
		catch(err) {
			alert("Syntax error");
		}
		display.style.textAlign = "right";
		result = true;
		this.clear();
	}
	
	this.clear = function() {
		this.string = "";
	}
}