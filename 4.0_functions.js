//***************************************************************************************
//FUNCTIONS
//***************************************************************************************

function greeting() {
	console.log("Good Morning!");
}
/* Parenthesis invoke our function so thay it runs the code inside. If no parenthesis are inlcuded
the function will not run, but instead return just what it is - [function:greeting] */
greeting();

/* Challenge: Create a function that says "Day 4, feeling great! then call that function. */
function day4() {
	console.log("Day 4, feeling great!");
}
day4();


//------------------------------------------------------------------------------------------------
//--- Void Functions:
//------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------
//--- Functions with Parameters:
//------------------------------------------------------------------------------------------------

function greeting2(name) {
	console.log("Time to start coding " + name);
}
greeting2("Mady");

//------------------------------------------------------------------------------------------------
/* You can add multiple parameters in a function. Not all have to be called for the function to
work, but if you want them to be called, they must be included in the argument.  */
function sum2(num1, num2) {
	console.log(num1 + num2);
}
sum2(3, 4);


//------------------------------------------------------------------------------------------------
//--- Scope:
//------------------------------------------------------------------------------------------------

var fname = "Aj";
function hello() {
	console.log(fname);
}
hello();

//------------------------------------------------------------------------------------------------
// var fname = "Aj";
// function hello(fname) {
// 	console.log(fname);
// }
// hello();
/* The above comes back as undefined because both variables and fucntions are placeholders. */

//------------------------------------------------------------------------------------------------
// var fname = "Aj";
// function hello(fname) {
// 	var lname = "Hephner";
// 	console.log(fname + " " + lname);
// }
// console.log(lname);
// hello();
/* If you declare a variable inside a function, it will be restricted to that function only. */

//------------------------------------------------------------------------------------------------
var fname = "Aj";
function hello(fname) {
	lname = "Hephner";
	console.log(fname + " " + lname);
}
console.log(lname);
hello();
/* The above works, even though the lname variable wasn't originally declared as v lname = "Hephner"
This is called hoisting, and it's an automatic correction built in by JavaScript. */

//------------------------------------------------------------------------------------------------
if ( 1 == 1 ) {
	let sum = 1 + 1;
	console.log(sum); //This should come back with 2
}
// console.log(sum); // This should come back with an error.
/* When declaring a new variable within a code block (curly braces), USE THE let KEYWORD INSTEAD
OF var !!! This gives it added security. This can be very useful with loops and if statements. */



/* Challenge: Create a function called capitalize() and use the for loop we created yesterday to
capitalize names. */

/* The below is how you originally coded this challenge. DO NOT TRY AGAIN! Your computer almost
overheated! */

// var studentName = "smita";
// // var capSN = "";
// function capitalize() {
// 	let capSN = studentName[0].toUpperCase;
// 	for ( let i = 1; i < studentName.length; i + 1) {
// 		capSN += studentName[i];
// 	}
// 	capSN = studentName;
// 	console.log(studentName);
// }
// capitalize(studentName );

//------------------------------------------------------------------------------------------------
/* The below is how you SHOULD code it if using a for loop. Take time to read over! */
function capitalize(name1){
    let name_temp = name1[0].toUpperCase();
    for (let i = 1; i < name1.length; i++){
        name_temp += name1[i];
    }
    name1 = name_temp;
    console.log(name1);
}
capitalize("dustin");

//------------------------------------------------------------------------------------------------
/* The below is how the instructor coded the challenge. He used a for in loop. Also read over! */
function capitalize2(studentName) {
	var newName = "";
	for ( var l in studentName ) {
/* READ THE BELOW NOTE FIRST! To find out why this problem is, console.log(typeof(l)) this can
check the data type... and in this case, l is a string, because it's associated with studentName */
		if ( l == 0 ) { 
//If you were to have 3 equal signs instead of two, it will print back still lowercase. Why?
			newName = studentName[l].toUpperCase();
		} else {
			newName += studentName[l];
		}
	}
		return newName;
/* Originally above - console.log(newName); which works, but it only prints to the terminal. It
does not return/give anything back to you that you're not specifically telling it to say. Going
forward, console.log will almost always be used only for debugging. Not in the actual code! */
}
console.log(capitalize2("kenn"));


