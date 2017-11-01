//***************************************************************************************
//IIFES
//***************************************************************************************

//Example #1:

var hello = "Hello";

(function(){
	var hello = "Hello2";
	console.log(hello); 
})();

//Example #2:

(function($){
	//jQuery methods go here...	
})(jQuery);

//Example #3:
function myName(){
	var firstName = "Madyson";
	for (let x = 0; x < firstName.length; x++){
		console.log("insert code to print to console here");
	}
}

//Example #4

function greetings(world){
	if (world){
		let earth = world;
		if (earth){
			let planet = earth;
		}
		console.log(planet);
	}
	console.log(earth);
}

//Example #5

function random(words){
	if (words){
		let letters = words;
		if (letters){
			let alphabet = letters;
		}
		console.log(alphabet);
	}
	console.log(letters);
}