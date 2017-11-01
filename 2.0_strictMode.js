//***************************************************************************************
//Strict Mode
//***************************************************************************************

//---------------------------------------------------------------------------------------
//----Intro:
//---------------------------------------------------------------------------------------
/* strict Mode is used to gain access to a restricted variant of JavaScript. Strict mode
intentionally has different interpretations from the regular, default mode of JavaScript.
Internet browsers that do not support strict mode will run the code differently than 
browsers that do, so it should NEVER be solely relied on without feature-testing for 
support of the dependant aspects beforehand.

Strict Mode code and Non-Strict Mode code CAN coexist just fine, so scripts can use Strict
Mode increasingly. */

//---------------------------------------------------------------------------------------
//----Strict Mode VS Non-Strict Mode:
//---------------------------------------------------------------------------------------
/* Strict Mode JavaScript makes a variety of changes to how Non-Strict Mode JavaScript
operates. Some key differences are:
				~ STRICT MODE ~
		----A) Eliminates a few silent JS
		   --errors, by making loud (so,
		   --actually throw those errors) 
		   ______________________________
		----B) Fixes bugs that cause
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
 */

 //---------------------------------------------------------------------------------------
//----Invoking Strict Mode:
//----------------------------------------------------------------------------------------
/* 
   -  Strict Mode does NOT apply to specific BLOCK STATEMENTS wrapped in curly braces .... {}
Putting it in curly braces will do nothing, and just waste file space.

   -  It does apply to either ENTIRE SCRIPTS or INDIVIDUAL FUNCTIONS. 

   -  STRINGS passed to WINDOWTIMERS.SETTIMEOUT() (windowTimers.setTimeout()), EVAL code (eval),
FUNCTION code (Function), EVENT HANDLER ATTRIBUTES, and SIMILAR act as entire scripts, and 
therefore, invoking Strict Mode works with them as it is expected to. 

__________________________________________________________________________________________

To invoke Strict Mode for an entire script, use the following syntax BEFORE anything else: */

"use strict";







































