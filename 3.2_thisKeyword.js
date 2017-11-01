//***************************************************************************************
//EXPRESSIONS & OPERATORS :: The "this" keyword
//***************************************************************************************

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
