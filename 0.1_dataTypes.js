//***************************************************************************************
//DATA TYPES Types
//***************************************************************************************

/* 
There are three basic data types you must know to get started:
		1) Strings (a string of characters - numbers, letters, etc. wrapped in quotations!)
		2) Numbers (1 2 3 4 5 10 - they're just what they sound like!)
		3) Booleans (true OR false - booleans work with conditional operators like > and <)
*/
//------------------------------------------------------------------------------------------------
//Strings
//------------------------------------------------------------------------------------------------
"What a wonderful world!";
'Hello everybody!';
/* You can wrap single quotation marks within double quotation marks, and vice versa. For example: */
"It's a wonderful day!";
'Mom said "The sky is blue and the grass is green!"';
/* If you're using single quotation marks, and need to use a single quote/apostrophe within that string, put a 
backslash before the single quotation mark. */
'Life\'s good.';
console.log('Life\'s good');
/* It can be a good idea to add spaces between the string indicator (double/single quotation marks) and 
parentheses, to help with readability and simplify the process of finding mistakes. */
console.log( "Life's good." );

console.log('\n');
console.log('\n');
console.log('\n');
/*The above will come back as a new line. So each line is blank. */

//------------------------------------------------------------------------------------------------
//Strings: Functions - Methods & Properties
//------------------------------------------------------------------------------------------------
/* The below is a method function */
console.log( 'Tiah said "Fifi was great on our walk today!"'.toUpperCase() );

/* The below is a property function. */
console.log( 'I like ice cream.'.length );


/* Challenge: Create a string with your name, and use a function to make all characters lowercase.
*/
console.log( "Mady Ward".toLowerCase() );

/* The main difference between a method and a property, is that a method stores a function, while a property
stores a value. That's why a method function has the () at the end, and a property does not. */

console.log( "mady"[0].toUpperCase());
console.log("mady"[0].toUpperCase() + "mady"[1] + "mady"[2] + "mady"[3]);
/* Strings are just characters. If you want to grab a specific character from a string, you can put brackers with
the number/place of the character in the middle. The above, for example. */

/* Challenge: Uppercase the "m" in the Home and put the string back together using string concatenation. */
//console.log( "Home"[2].toUpperCase() );
console.log( "Home"[0] + "Home"[1] + "Home"[2].toUpperCase() + "Home"[3] );

/* The below function, .typeof() shows the data type... in this case, a string. */
console.log(typeof("Amber"));
//------------------------------------------------------------------------------------------------------------

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');

//------------------------------------------------------------------------------------------------
//Numbers
//------------------------------------------------------------------------------------------------
console.log(typeof(2));
/* The above shows the data type as a number, to follow along with the last note in string functions. */

console.log(2 + 5);
console.log(2 - 5);
console.log(2 / 5);
console.log(2 * 5);
console.log(5 % 2);
/* The operators above are add, subtract, divide, multiply, and modulus (divide and give the remainder. ) */
//------------------------------------------------------------------------------------------------------------

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');

//------------------------------------------------------------------------------------------------
//Booleans
//------------------------------------------------------------------------------------------------
console.log(true);
console.log(false);
/* Booleans are true or false. 
Boolean Conditional Operators are the following:
-  <   : less than
-  >   : greater than
-  <=  : less than or equal to
-  >=  : greater than or equal to
-  ==  : equal to
-  === : strictly equal to
-  !   : not
-  !=  : not equal to
 */

console.log(4 == 5);
/* The above would come back as false. */

console.log("Test".length > "ego".length);
/* The above would ring back as true, because the amount of characters in "Test" are greater than the amount in
"ego" */
console.log(1 == "1");
console.log(1 === "1");
/* For the above, the first comparison would come back as true, and the second as false. This is because == is
equal to, and === is EXACTLY equal to...meaning it compares everything, including data type. */

console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
console.log('\n');
//------------------------------------------------------------------------------------------------------------







