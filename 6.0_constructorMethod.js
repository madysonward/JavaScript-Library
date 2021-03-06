//***************************************************************************************
//THE CONSTRUCTOR METHOD
//***************************************************************************************


/* I saw the constructor method for the first time when doing my research for on The new Operator
(see file 0.07.1_newOperator.js). As a part of the new operator, it is used as a type of function.
This function was called similarly enough to a regular function - you can definitely tell that it 
IS a function when looking at the syntax. The one part, however, that is most distinguishable is how
the argument is stated. The syntax from that lesson looked like this: */

																		new constructor[([argument])];

/* The article I read on the new operator did not go in to too much detail about constructors, so 
considering that they are advanced methods, there will likely be a lot to cover in this file! Here goes! */

/* The Mozilla Developer documents state that the constructor method is a SPECIAL METHOD for creating and
initializing an object created within a class. As a METHOD (!!!! Not function - take note), the syntax 
looks like this: */
					constructor([arguments]) {...};

/* In every class, you may only use ONE special method under the name of constructor. Otherwise, you are
guaranteed to get a Syntax Error.

In regards to constructors and classes, you may use the keyword, super, to call the constructor method of
a parent class. 

As one of JavaScript's handy-helpers (AKA, the auto choices it makes for you, when you do not make 
decisions for yourself), if you, yourself do not specify a constructor method, a default method will be
chosen for you. The default constructor method for parent classes is: */

constructor(){}

/* ..and the default constructor method for child classes: */

constructor("insert something here"){
	super("insert something here");
}


/* Some examples of the constructor method being used (including the keyword, super): */

class Polygon {
	constructor(){
		this.name = "Polygon";
	}
};

class Square extends Polygon {
	constructor(){
		super();
	}
};
