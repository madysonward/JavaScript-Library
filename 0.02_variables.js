//-----------------------------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------------------------

var name;

name = "Madyson";
/* There two methods of declaring a variable. One is shown above.
***Side note:A single equal sign is an assignment operator. It is used to assign whatever is 
on the left, to whatever is on the right.*** */

console.log(typeof(name));
console.log(name);
/* The other method of declaring a variable, is shown below. */
var lastName = "Ward";
console.log(name.length);
console.log(name.toUpperCase());

/* Challenge: Create three variables - "firstName', 'lastName', and 'fullName'. And put them 
together in a console.log() */
var firstName = "Jay";
var lastName = "Jackson";
var fullName = firstName + " " + lastName;
console.log( firstName + ", " + lastName + ", " + fullName);
/* The above challenge is a prime example of how variables are temporary placeholders first. 
Originally, var lastName = was "Ward". You then for the challenge, however, you had to declare 
another var lastName = and it was "Jackson". The code still ran and worked fine, but this created
seperate storage. Instead of creating the var lastName = variable all over again, you should just
redefine the var by stating lastName = (so not var before.) */

console.log('\n');
console.log('\n');
//-------------------------------------------------------------------------------------------
/* Module Challenges */
//-------------------------------------------------------------------------------------------
/* BRONZE */
var appleCost = 3;
var almondCost = 5;
var vitaminCost = 25;
var shampooCost = 9;
var conditionerCost = 10;
console.log("I need a few things from the grocery store. Shampoo will be $" + shampooCost + " and my conditioner is $" + conditionerCost + ".");

console.log('\n');
/* SILVER */
var myNumber = 0;
myNumber += 10;
console.log(myNumber);
myNumber -= 1;
console.log(myNumber);
myNumber *= 9;
console.log(myNumber);
myNumber /= 7;
console.log(myNumber);
/* Another way to do this would be -- myNumber = (myNumber + 10); but the above method is best. */

console.log('\n');
console.log('\n');
/* GOLD */
var currentAge = 23;
var maxAge = 100;
var candyDay = 2;
candyDay *= 77;
console.log("If I won a lifetime supply of my favorite candy, I would need " + candyDay + " bags of hard toffee to last me the rest of my life.")

console.log('\n');
console.log('\n');
