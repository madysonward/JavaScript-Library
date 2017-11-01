//***************************************************************************************
//STATEMENTS & DECLARATIONS :: Loops
//***************************************************************************************

/* lcv is a Loop Control Variable. For example: for (var i = 0;)  In this case, i would be the lcv*/

//------------------------------------------------------------------------------------------------------------
//--- for Loops:
//------------------------------------------------------------------------------------------------------------
/* Step one: Initialize variable. Have a boolean expression. */
for ( var i = 0; i < 10; i = i + 1 ) {
	console.log(i);
}
/* Note: you can write the last comparison in the for loop as is, or as i += 1 or i++ */

/* Challenge: Using a for loop, count to 20 by 2's. */
for ( let x = 0; x < 21; x += 2 ) {
	console.log(x);
}
/* The best way to write a for loop, as recommended by the instructor:
var name = "Kenn";
for ( var i = 0; i < name.length; i++ ) {
	console.log(name[i]);
}	
 */
console.log('\n');
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
//--- while Loops:
//------------------------------------------------------------------------------------------------------------

/* Step one: Initialize variable. */
var j = 0;
/* Step two: Write a boolean expression. */
while (j < 5) {
/* Step three: Step through the loop. */
	j = j + 1 /* Or, j += 1 or j++ */
	console.log(j);  /*Placement is everything! With console.log() being at the bottom of this loop,
	the numbers will print out to 5. If you place it above step 3, however, it will print to 4. While
	using a while loop, is it usually best to place the console.log() at the bottom of this kind of
	loop. */
}
//while true loops:
// while (true) {
// 	console.log("runs once");
// 	return false;
// }
// console.log('\n');

/* Challenge: Create a while loop that counts to 100 by 10's. */
var k = 0;
while (k < 100) {
	k += 10;
	console.log(k);
}
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
//--- for in Loops:
//------------------------------------------------------------------------------------------------------------

/* Also known as for each loops in other programming languages. The wonderful thing about for in
loops, is that you do not have to specify to increment or decrement. */
// var studentName = "smita";
/*     lcv     collection */
// for (var l in studentName) {
// 	console.log(studentName[l]);
// }

/* Challenge: Capitalize the first letter of the student's name, then rebuild the string. */
var studentName = "smita";
var studentRest = studentName.substring(1);
for (var t in studentName) {
	var y = studentName[0].toUpperCase() + studentRest;
	console.log(y);
}

/* The above printed out as Smita, but it printed out 5 times! Although you implented a .substring() 
method for the first time (and it worked!), this is a time where you can look at your solution, 
see that it wasn't/isn't working, and can realize you overcomplicated the solution. The below 
solves everything, and is much simpler (and less migraine-provoking!).

Instructor's Way:
var studentName = "Smita";
var capSN = "";
for ( var l in studentName) {
	if (1 == 0) {
	capSN = studentName[1].toUpperCase();
	} else {
	capSN += studentName[1];
	}
	console.log(capSN);
}
 */

//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
//--- do while Loops:
//------------------------------------------------------------------------------------------------------------

/* do while loops will always run at least once. */



//------------------------------------------------------------------------------------------------------------
