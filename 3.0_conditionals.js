//***************************************************************************************
//EXPRESSIONS & OPERATORS :: Conditionals
//***************************************************************************************


/* Conditional Operators:
-  <   : less than
-  >   : greater than
-  <=  : less than or equal to
-  >=  : greater than or equal to
-  ==  : equal to
-  === : strictly equal to
-  !   : not
-  !=  : not equal to
-  &&  : and/or (one or both things must be true)
-  ||  : and (two things must be true)
 */

//  var name = "Mady";

// if ( "Mady" == name ) {
// 	console.log( "Hey, your name is " + name );
// } else {
// 	console.log("What's your name?");
// };

/* Challenge: Create an if statement that checks if the user's name does not have a capital 
letter. If not, rebuild their name with the lowercase letter capitalized. */
var userName = "leah";
if (userName[0] != userName[0].toUpperCase()) {
	userName = userName[0].toUpperCase() + userName[1] + userName[2] + userName[3];
	console.log("Hello, " + userName + ". You forgot to capitalize the first letter in your name.");
} else {
	console.log("Hello, Leah!");
};
/* The above method of cutting out characters & building out the rest of the name in the if 
statement's console.log() for isobviously very inefficient. Better ways to cut and build are
.splice or .substring() */



/* The below is an example of an if/else statement.Use of an if/else statement is required when 
there is more than one thing being compared. Order/layout is VERY important when writing this 
code, as it will pick whatever is true first. */
var age = 23
if (age >= 25) {
	console.log("Yay! Your car rental rates are lower.");
} else if (age >= 21) {
	console.log("Have a glass!");
} else if (age >= 18) {
	console.log("You may vote in the election.");
} else {
	console.log("You're too young to have fun.");
}




