//----------------------------------------------------------------------------------------------
//Arrays: .length Property
//----------------------------------------------------------------------------------------------

/* By now, .length has already become a commonly used/seen property - and not just with arrays!
With arrays, .length sets or returns the number of elements within that array. 

Reminder -- JavaScript counts from 0 up. So the following example would return.

The value of .lengyh is a positive integer, with a value of less than 32 to the 2nd power (32 squared.)


The below code is an example of an array with a value of exactly 32 squared, as well as one with a 
negative integer. While this code would log just 1, if you are using the new operator 
(see file 0.07.1_objectsNewOperator for more info), it will come back as a Range Error. */

// var array1 = [4294967296]; // <--- 4294967296 = 32 squared.
// var array2 = [-23]; // -23 = a negative integer

// console.log(array1.length);
// console.log(array2.length);

/* You can, however, change a set a .length's property to shorten the array. Likewise (to an
extent), you can also extend an array by setting a .length's property. NOTE: THIS DOES NOT MEAN 
THE NUMBER OF ELEMENTS IN THE ARRAY INCREASES! The below code is an example: */

var colors = ["red", "blue", "yellow"]; // This declares the 3 elements of the array that = colors
console.log(colors.length); // This will return as 3

colors.length = 5; // Here, we are saying that colors has 5 elements, not 3.
console.log(Object.keys(colors)); // We console.log Object.keys (see 0.07.2_objectsDotKeys for more info)
								 // to return the .length's property of colors (redefining, essentially)
console.log(colors.length); // Here, we can now see the new property of .length for the colors array, even
						   // though nothing new has been added.

/* Now, in the below code, you can see how to decrease the property of .length for the colors array. 
NOTE: This WILL DECREASE the actual amount of elements in the array. */

colors.length = 2; // Declaring the colors array only has 2 elements.
console.log(Object.keys(colors));
console.log(colors.length);


/* .length also allows you the ability to iterate over an array. See the following code: */

var numbers = [1, 2, 3, 4, 5, 6, 7];
var length = numbers.length;
for (var i = 0; i < length; i++) {
	numbers[i] *= 2;
} //numbers will now be [2, 4, 6, 8, 10, 12, 14]
console.log(numbers);


/* Another method for shortening an array - the below */
if (numbers.length > 3) {
	numbers.length = 3;
}
console.log(numbers); // This will come back as [2, 4, 6]
console.log(numbers.length); // This will come back as 3
