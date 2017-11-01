//***************************************************************************************
//OBJECTS
//***************************************************************************************

let food = {
	pies: ["Pecan", "Blueberry", "Cherry", "Key Lime"],
	newP: [],
	getPies: function(){
		return this.pies 
	},
	addPie: function(){
		let counter;
		return this.pies.forEach(function(addPieP){
			console.log(addPieP + " pie")
		})
	},		
	newPies: function(){
		this.pies.forEach(function(flavor){food.newP.push(flavor + " pie")})
		return this.newP
	},	
}

food.addPie();
/* Above, you originally wrote as console.log(food.addPie()); which ran fine, but came up with 
undefined at the very end. We checked how many times it ran to see if that may be the issue, but it
wasn't - it did run 4 times. But the problem was that you were calling a function twice! */
console.log(food.newPies());

// this refers to the object it's calling. In the case here, food object
// Keep in mind, the this keyword is relative to its scope.
/* In order to pull an item out of the pies array, you must write it as food.pies[0] because pies is 
nested in the variable food. See below. */
//console.log(food.pies[3] + " pie");


/* CHALLENGE: Iterate over the pie array and print out each pie, then add pie to them using the 
forEach method. */
// console.log(food.pies);
// food.pies.forEach(function(addP){console.log(addP + " Pie");});

//console.log(food.getPies());
/* Above, you can see that you had to include () after food.getPies ..this is because getPies was 
originally called as a function within the food parameter, so you must continue to treat it as such */


/* CHALLENGE: Create a method inside of the object food that appends ' pie' to the different pies in
array list. */