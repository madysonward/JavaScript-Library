//---------------------------------------------------------------------------------------
//Scope
//---------------------------------------------------------------------------------------


/* An Analogy:

Local vs Global: The World
Every country has their own local scope. But the world has their own global scope (ex: the sun, sea, grass, etc.).
Too much global scope is pollution. If a variable is inside a function. It's local (and yes, you can have layered 
local scopes....coutntries has states, counties, towns, etc.) If it's outside functions, it's global. 


Tips from previous class: Learn about ES6, and then ES7! 
ES6 - let and const plays/can alter with scope ...especially with const. */



//---------------------------------------------------------------------------------------
//Hoisting:
//---------------------------------------------------------------------------------------

/* Very important when it comes to variables and functions. It's when you declare things - you declare variables
and you declare functions. 

If you have a whole bunch of code, and then you declare a function at the very bottom, it will not cause any 
problems, because of hoisting. The function is hoisted up to the very top of the code when it runs, so it runs 
correctly.

//---------------------------------------------------------------------------------------

Variables are more difficult when it comes to hoisting. The below may not come up with an error, but it will come 
back as undefined. 

console.log(i);
var i = 22; */



//---------------------------------------------------------------------------------------
//Closures: Functions Within a Function
//---------------------------------------------------------------------------------------

/* 
This is your outer function
	This is your inner function. Within this function, I have access to the outer function(s)' variables.
	For example, I can use the outer variables, as well as the outer parameters from the outer function. 


var myNodeList = document.querySelectorAll("p");
var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (j) {
			return function (e) {
				alert(j);
			}
		}(i);
	}
}	
add_the_handlers(myNodeList);

 */


