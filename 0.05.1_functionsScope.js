//***************************************************************************************
//Scope
//***************************************************************************************

//---------------------------------------------------------------------------------------
//----Intro:
//---------------------------------------------------------------------------------------

/* A MYTH: 
! JavaScript is commonly thought to be a dynamic language - it's interpreted, not compiled, there's no compiler involved etc.
== JavaScript IS actually a compiled language (though not compiled quite the same as other languages).
The primary difference, is that JavaScript is NOT sent out as the compiled binary form of a program. It is sent as the original
source code program. Instead, it compiled every time that it's executed.

AN ANALOGY:
Local vs Global: The World
Every country has their own local scope. But the world has their own global scope (ex: the sun, sea, grass, etc.).
Too much global scope is pollution. If a variable is inside a function. It's local (and yes, you can have layered 
local scopes....countries has states, counties, towns, etc.) If it's outside functions, it's global. 


Tips from the June 2017 Cohort: 
 - Learn about ES6, and then ES7! 
 - In ES6 - let and const plays/can alter with scope ...especially with const. */


//---------------------------------------------------------------------------------------
//----Types of Scope:
//---------------------------------------------------------------------------------------

/* There are two MAIN types of scope, which you will most commonly see:

   1) FUNCTION SCOPE (AKA local)is the smallest type of scope. This is the code within the curly brackets of a 
function. 

   2) GLOBAL SCOPE is the biggest type of scope, and it spans the whole length of code. If something is not found
within an function, it is in global scope!



------OTHER IMPORTANT POINTS------

  -  MULTIPLE scopes can nest inside each other -  function(s) within a function. 

  - LARGER/OUTER scopes cannot steal from smaller scopes, however, SMALLER/INNER scopes can steal from larger scopes.
So essentially, Inner functions can take variables from outer functions, but outer functions can't take from the
inner functions.

  - What about the variables that aren't originally defined/located within a function? It is Global scope, and can be 
accessed anywhere within your code! */



//---------------------------------------------------------------------------------------
//----Compiler:
//---------------------------------------------------------------------------------------

/* 
------MUST-KNOW COMPILER TERMINOLOGY------
  - LHS (Left-Hand Side) and RHS (Right-Hand Side) = is used in reference to what's on the LHS and RHS of an assignment. The
best and easiest example, is an equals sign, though it's not the only assignment that can have a LHS and RHS. So to break it 
down even further: 
					LHS = target - where the immediate value goes/is assigned
					RHS = source - the immediate value


  - Undeclared variable = In Strict Mode (file 1.0_strictMode.js), the compiler was unable to an LHS a proper LHS reference on
any of the scopes that it has access to. Undeclared and Undefined are NOT the same thing!

  - Undefined = An object was declared, so it does have a value, BUT that is a special empty value that has been mistakenly 
  called... undefined. 

**NOTE: To repeat, undeclared and undefined are NOT the same:
**															Undeclared = NO value	**
**														Undefined = an EMPTY value	**
**																					**


------INTERPRETED VS COMPILED LANGUAGES------

As mentioned in the intro, JavaScript is often misunderstood as a compiled language, and instead thought to be interpreted.
But an INTERPRETED LANGUAGE is one that reads from top to bottom, each one line at a time. A COMPILED LANGUAGE, however, is
one that does an initial pass through that code, then at least one more pass, then a final pass - which is when the code 
actually runs! */

//var foo = "bar";  <------- variable declaration. Identifier = foo ...there is an initialization to the variable with 
																					// an immediate value (string value)
/*While the above is probably read by humans as a single JavaScript statement (and, as confirmed by Kyle Simpson in the 
Advanced JS PluralSight course, to say it is a single statement would be grammatically correct. BUT! That is not how 
JavaScript will process it when it needs to execute the code. 

With that being said, it should actually be treated as TWO ENTIRELY SEPARATE OPERATIONS. There a declaration operation,
which is: -- var foo -- and an initialization, which is: -- foo = "bar"; --   
Those two actions happen at totally separate times. A compiler will pass through all the code and look for all of the 
variable AND function (like below!) declarations in all of the places we can find them.

**NOTE: Whereas the value of a variable isn't cared about within the first time a compiler passes through code, it DOES
care about the value of functions.**
 */

//function bar(){
//	var foo = "baz";
//};

//function baz(foo){
//	foo = "bam";
//	bam = "yay";
//};

/* So, to explain each line of code during the first pass from the computer's standpoint: */
var foo = "bar"; //Here is a variable declaration with an identifier, foo, in the global scope.

function bar(){ //Here is a function declaration with an identifier, bar, also in the global scope.
	var foo = "baz"; //A variable declaration with idenitifer, foo, in the LOCAL scope of the function, bar
};

function baz(foo){ //Function declaration with the identifier, baz, added to the declaration list of Global scope, AND
				//a parameter, foo, which is treated as a variable declaration with the LOCAL scope of the function, baz.
	foo = "bam"; 
	bam = "yay"; //**NOTE: This line and the above (99 & 100) are not run over.**
};

/* Now, to explain during the the second pass, from the computer's standpoint 
("f"'s have been changed to "m"'s... "b"'s to "t"'s... and "y"'s to "z"'s) */
var moo = "tar"; //Acknowledges that the equals sign infers there is a LHS (LHS reference, moo) & RHS (immediate value, "tar")
					//is assigned to it. Then asks, where that variable exists, by essentially asking the global scope, 
					//"I have an LHS reference for a variable called "moo". Does it sound familar?". The scope manager responds
					//with "Yes, it does!". The computer doesn't need to do any lookups for the RHS, because it has an 
					//immediate value, so it can keep going to the next line.

function tar(){ //**NOTE: Function declaration executions (or at least, in this example, lines 119-127) are no longer passed 
					//over. In fact, they basically do not exist to the compiler anymore. **
	var moo = "taz"; //The computer asks the local scope of the function, tar, "I have an LHS reference for a variable, moo. 
	//Sound familar?". It will get a response, "Yes, with an immediate value of "taz".""
};

function taz(moo){ 
	moo = "tam"; //"I have an LHS reference for a variable, foo, which is in my definition of the function declaration, taz."
	tam = "zaz"; //This line will execute poorly. The computer asks the local scope of taz, "I have an LHS reference for a
};				//variable called tam. Sound familiar?" and get a response back of "Nope!". So where to from here? The 
				//computer then searches the next level/layer of scope outside where it is currently (and if there's no luck
				//there, then the next outer layer, and next, and next, and so forth). In this example, the next outer layer
				//is global scope. And because you're not in strict mode, JavaScript will go ahead and create that target (on 
				//the global scope for you BECAUSE you had an LHS reference. THIS IS VERY IMPORTANT TO UNDERSTAND, and know 
				//it'd be much different if it were an RHS reference! 
				//IF you'd been in STRICT MODE (more about this in file 1.0_strictMode.js), after the computer got a response of
				//"Nope! Never heard of the LHS reference of variable, moo.", even on the global scope, it would've ended there, 
				//and you would've gotten an error condition. This is set up so you can't give assignments to objects that have
				//never been declared. THIS IS, AGAIN, VERY IMPORTANT! The key difference in something being declared or not, is
				//that there will be a VARIABLE or FUNCTION somewhere. Otherwise, it is called "undeclared" (see line )





/* Compilers automatically make variables in global scope.

If, when compiling, it comes across a name that is not declared by a variable or function, JavaScript will declare it
for you in the Global Scope - no matter what scope you are in. 

This is where "Esclating Data" comes it. It makes said variable accessible outside of it's original scope.

With compiling, JavaScript goes through code multiple times, not just once. 
The FIRST time is making a list of declared variables/functions. The SECOND time is when it does things with the code -
or in other terms, executes the code. */







