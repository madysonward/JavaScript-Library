//***************************************************************************************
//FUNCTIONS :: Closures, functions within a function
//***************************************************************************************

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
