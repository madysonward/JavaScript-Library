//***************************************************************************************
//Strict Mode
//***************************************************************************************

//---------------------------------------------------------------------------------------
//----Intro:
//---------------------------------------------------------------------------------------
/*
	strict Mode is used to gain access to a restricted variant of JavaScript. Strict mode
intentionally has different interpretations from the regular, default mode of JavaScript.
Internet browsers that do not support strict mode will run the code differently than 
browsers that do, so it should NEVER be solely relied on without feature-testing for 
support of the dependant aspects beforehand.

Strict Mode code and Non-Strict Mode code CAN coexist just fine, so scripts can use Strict
Mode increasingly. */

//---------------------------------------------------------------------------------------
//----Strict Mode VS Non-Strict Mode:
//---------------------------------------------------------------------------------------
/*
	Strict Mode JavaScript makes a variety of changes to how Non-Strict Mode JavaScript
operates. Some key differences are:
				~ STRICT MODE ~
		----A) Eliminates a few silent JS
		   --errors, by making them loud
		   --(actually throw those errors) 
		   ______________________________
		----B) Fixes mistakes that cause
		   --difficulty for JS to make
		   --engine optimizations
		   ______________________________
		----C) CAN be used to make code
		   --sometimes run faster than
		   --Non-Strict Mode code.
		   ______________________________
		----D) Will prohibit some code 
		   --from working (especially in
		   --future versions of JS)

So essentially, the key changes Strict Mode will bring are either within the:
					SYNTAX BEHAVIOR
				or
					RUNTIME BEHAVIOR

...and these changes will nearly always fall into one of these categories:

		- Converting mistakes into SYNTAX ERRORS or ERRORS at RUNTIME
		- Simplification of how the particular variable for a given use of a name is computed.
		- Simplification of EVAL (eval) or ARGUMENTS (arguments)
		- Easier to write "secure" JavaScript
		- Changes in anticipation of future ECMAScript evolution
 */

 //---------------------------------------------------------------------------------------
//----Invoking Strict Mode for Entire Scripts :
//----------------------------------------------------------------------------------------
/* 
   -  Strict Mode does NOT apply to specific BLOCK STATEMENTS wrapped in curly braces .... {}
Putting it in curly braces will do nothing, and just waste file space.

   -  It does apply to either ENTIRE SCRIPTS or INDIVIDUAL FUNCTIONS. 

   -  STRINGS passed to WINDOWTIMERS.SETTIMEOUT() (windowTimers.setTimeout()), EVAL code (eval),
FUNCTION code (Function), EVENT HANDLER ATTRIBUTES, and SIMILAR act as entire scripts, and 
therefore, invoking Strict Mode works with them as it is expected to. 

_________________________________________________________________________________________

To invoke Strict Mode for an entire script, use the following syntax BEFORE anything else: */

"use strict";
var q = "Hello! I'm a Strict Mode script.";

//---------------------------------------------------------------------------------------
//----Problems with Strict Mode + Non-Strict Mode:
//---------------------------------------------------------------------------------------
/*
   -  The above syntax has a big problem (which once gave Amazon a firm slap across the face)
It is IMPOSSIBLE to blindly concatenate non-conflicting scripts!

   -  Concatenating Strict Mode scripts with Non-Strict Mode Scripts looks strict and vice-versa
Concatenation of Strict Mode scripts with other Strict Mode scripts is fine, just like how
you can concatenate Non-Strict Mode scripts with Non-Strict Mode scripts without any problems.
BUT you will cause issues by attempting to put the two together!

   -  Therefore, it is HIGHLY recommended you enable Strict Mode on a function-by-function basis,
during the transition period (at the very least).

   -  One simple way of using Strict Mode on a function-by-function basis without having to type
in the syntax repeatedly (remember, NEVER repeat yourself!), is by calling Strict Mode on the
entire contents of a script inside a function, which is nested within a large, OUTER FUNCTION.

   -  WARNING with the above: While this does eliminate problems with concatenation, it does
mean that you will NEED to explicitly export any global variables OUTSIDE of the function's scope.
*/

//---------------------------------------------------------------------------------------
//----Invoking Strict Mode on Functions:
//---------------------------------------------------------------------------------------
/* 
	Just like when you invoke Strict Mode for an entire Script, you will also put the exact syntax
statement of "use strict"; when invoking it on functions. You'll state the function, then the first
line of code underneath will be that statement.

__________________________________________________________________________________________

To invoke Strict Mode for an indiviual function, use the following syntax WITHIN the function: */

function strict(){
	"use strict";
	function nested(){
		return "And I am, too!";
	}
	return "Hello! I'm a Strict Mode function. " + nested();
}
function nonStrict(){
	return "I am not a Strict Mode function.";
}


//---------------------------------------------------------------------------------------
//----More:
//---------------------------------------------------------------------------------------
/* 
	For more notes on Strict Mode, please see files:
	* Turning Mistakes into Errors  -----  4.1_mistakesToErrors
	* Simpler Variable Use 			-----  4.2_easierVars
	* Easy Evals and Arguments 		-----  4.3_simpleEvalArguments
	* Secure JS and Future Use 		-----  4.4_secureFuture
 */























