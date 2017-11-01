//***************************************************************************************
//Methods
//***************************************************************************************

//---------------------------------------------------------------------------------------
//----Intro:
//---------------------------------------------------------------------------------------

/* 
A method is a function which is a property of an object. 
There are two kinds of methods:
		1) INSTANCE METHODS - which are built-in tasks performed by an object instance, and...
		2) STATIC METHODS - tasks that can be performed w/o the need of an object instance.
*/

//---------------------------------------------------------------------------------------
//----Definitions Intro:
//---------------------------------------------------------------------------------------

/* 
Starting in ES5, shorter syntax for method definitions on object initializers was introduced,
	which is a shorthand for a function assigned to the method's name. Before you would have 
	to code the below...
*/

var obj = {
	foo: function(){
		/* insert code here */
	},
	bar: function(){
		/* more code here */
	}
};

/* ...and now, you're able to code it as the following: */

var obj1 = {
	foo1(){
		/* code here */
	},
	bar1(){
		/* and more here */
	}
};

//---------------------------------------------------------------------------------------
//----Definitions:
//---------------------------------------------------------------------------------------

/*
There are a few other methods that can be defined with a shorter syntax. They are:
														1) Generator Methods
														2) Async Methods
														3) Async Generator Methods
*/


/******* IMPORTANT!! *******/
/** ALL method definitions are not
constructable, & will throw a TypeError if you try to use them. **/














