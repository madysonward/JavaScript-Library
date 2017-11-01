//***************************************************************************************
//OBJECTS :: Arrays
//***************************************************************************************


/* Arrays can hold multiple data, and multiple data types. You can also have arrays within arrays, 
or otherwise..multi-dimensional arrays! In order to specifically target multi-dimensional arrays, you
must specify the # of the first array within the multi-dimensional array. (see the 2nd or 3rd line of
code). One key thing to keep in mind with arrays, is that data is stored by numbers, counting from 0 
up. */

let students = ["Thomas", "Madyson", "Brandon", "Leon", 23, true, ["Jackson", "Perry"]];
console.log(typeof(students));
console.log(students[2]);
/* Question: Is JavaScript an object oriented language? 
Answer: Yes and no. While Java is an object-oriented language, JavaScript is a hybrid of a 
functional and object-oriented language */

/* CHALLENGE: Grab a nested array out of the student, and grab "Perry", then print to the console,
"Hello Perry the Platypus!" */

console.log("Hello " + students[6][1] + " the Platypus!");
/* OR! The instrucor originally had the below. Notice the commas instead of plus signs. There are 
THREE strings in the following method. Plus signs put everything together as one, while commas just
put everything side by side, but each string remaining a seperate string of its own. */
console.log("Hello " + students[6][1] + " the Platypus!");

/* CHALLENGE: Create an array of food, then create a for in loop to log each array item once. */
let arrOfFood = ["Quesadilla", "Pecan Pie", "Potato", "Cheesecake", "Shrimp Pasta"];
for (let i in arrOfFood) {
	console.log(arrOfFood[i]);
}

/* The above method got the correct solution, BUT! There's an easier method to this. Instead of using
the word in for a for in loop, use of. You can then replace the console.log(arrOfFood[i]) with just 
console.log(i) Example shown below: */
let arrOfCandy = ["Swedish Fish", "Oreos", "Twix", "Snickers"];
for (let c of arrOfCandy) {
	console.log(c);
}


/* Adding items to an array: .push */
arrOfFood.push("NY Style Pizza");
/* Taking items out of an array: .splice */
arrOfFood.splice(1, 0, "Blueberry Pie"); 
/*  Item # to cut^  ^How many to cut ^What to replace it with. 
You dont always have to cut or add something! For example: */
arrOfFood.splice(1, 1, "Blueberry Pie");
arrOfFood.splice(2, 0, "Sweet Potato");
arrOfFood.splice(0, 2);
/* There's also a method for removing the very last item of an array. It's called .pop() Example: */
arrOfFood.pop();



for ( let foodItem of arrOfFood ) {
	console.log(foodItem);
}


let arrOfFood = ["Quesadilla", "Pecan Pie", "Potato", "Cheesecake", "Shrimp Pasta"];
for (let i of arrOfFood) {
	console.log(i);
}
/* The below method is referred to as a callback. A callback is a method that is a loop. It is a 
shortcut for the above for in (in written as of) loop. And bonus - it can all be on the same line! It
is even more lightweight than the use of vars or lets, and therefore, even more secure. */



arrOfFood.forEach(function(foodItem){console.log(foodItem);})

arrOfFood.forEach(function(foodItem, banana){
	console.log(banana);
	console.log(foodItem);
})
/* The above prints out as each food item, along with it's number of order above it. This is because 
with multiple positions in a forEach loop, each position is has a different purpose that's already. 
built in, and are reversed. */

