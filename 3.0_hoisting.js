//***************************************************************************************
//Hoisting:
//***************************************************************************************

/* Very important when it comes to variables and functions. It's when you declare things - you declare variables
and you declare functions. 

If you have a whole bunch of code, and then you declare a function at the very bottom, it will not cause any 
problems, because of hoisting. The function is hoisted up to the very top of the code when it runs, so it runs 
correctly.

//---------------------------------------------------------------------------------------

Variables are more difficult when it comes to hoisting. The below may not come up with an error, but it will come 
back as undefined. 

console.log(i);
var i = 22; 

IMPORTANT: THE let keyword does NOT hoist! */