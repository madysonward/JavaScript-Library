//***************************************************************************************
//Scope
//***************************************************************************************


/* An Analogy:

Local vs Global: The World
Every country has their own local scope. But the world has their own global scope (ex: the sun, sea, grass, etc.).
Too much global scope is pollution. If a variable is inside a function. It's local (and yes, you can have layered 
local scopes....coutntries has states, counties, towns, etc.) If it's outside functions, it's global. 


Tips from previous class: Learn about ES6, and then ES7! 
ES6 - let and const plays/can alter with scope ...especially with const. */



//---------------------------------------------------------------------------------------
//Hoisting:
//---------------------------------------------------------------------------------------

/* Very important when it comes to variables and functions. It's when you declare things - you declare variables
and you declare functions. 

If you have a whole bunch of code, and then you declare a function at the very bottom, it will not cause any 
problems, because of hoisting. The function is hoisted up to the very top of the code when it runs, so it runs 
correctly.

//---------------------------------------------------------------------------------------

Variables are more difficult when it comes to hoisting. The below may not come up with an error, but it will come 
back as undefined. 

console.log(i);
var i = 22; */

//---------------------------------------------------------------------------------------
// .this
//---------------------------------------------------------------------------------------
/* .this is a word that takes place of a noun. 
.this is, in short, a JavaScript pronoun.

var player -{
	name: "",
	points: 100,
	printName: function(){
	console.log(this.name)
	}
	printPoints: function(){
	console.log(this.points)
	}
 Or, print the above as:
	printAll: function(){
	console.log(this.name + " got " + this.points + " points.")
	}


var mady = Object.create(plauer);
mady.name = "Mady";
mady.points = 50;
mady.printName();
mady.printPoints();
*/

var student = {
	name: "",
	course: "",
	age: "",
	printAll: function(){
		console.log(this.name + " is " + this.age + " years old, and is in the " + this.course + "course.")
	}
}

var mady = Object.create(student)
mady.name = "Mady";
mady.course = "JavaScript";
mady.age = "23";

mady.printAll;



//---------------------------------------------------------------------------------------
//IIFE
//---------------------------------------------------------------------------------------

/* An IIFE (pronounced "iffy") creates a local scope with added privacy. It's a function 
that CANNOT be seen from the outside. They're a function that's opened and close with 
parentheses. You will notice below that the function is never called and never defined. 
While you won't use them THAT often, when you do... they're VERY important! */

let i = 4;
console.log(i);
(function(){
	var arraigh = [];

		arraigh.push(i, i + 1, i + 2);
		console.log(arraigh[0]);
		console.log(arraigh[1]);
		console.log(arraigh[2]);
})();
console.log(i);


(function(){
	var superSecret = 195;
})();


//---------------------------------------------------------------------------------------
//APIs: Clients and Server
//---------------------------------------------------------------------------------------

/*
			  Request
 	Client --------------> Server   
	|							| Sequal Querries
	|							|	  |
	|							|-------> Database
	|							|
	|							|
	 <--------------------------
			  Response

*/

