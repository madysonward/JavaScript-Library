//***************************************************************************************
//IIFE
//***************************************************************************************


/* An IIFE (pronounced "iffy") creates a local scope with added privacy. It's a function 
that CANNOT be seen from the outside. They're a function that's opened and close with 
parentheses. You will notice below that the function is never called and never defined. 
While you won't use them THAT often, when you do... they're VERY important! */

let i = 4;
console.log(i);
(function(){
	var arraigh = [];

		arraigh.push(i, i + 1, i + 2);
		console.log(arraigh[0]);
		console.log(arraigh[1]);
		console.log(arraigh[2]);
})();
console.log(i);


(function(){
	var superSecret = 195;
})();