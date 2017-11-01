//***************************************************************************************
//STRINGS :: Must Know Info
//***************************************************************************************

//------------------------------------------------------------------------------------------------
//Escape Notation
//------------------------------------------------------------------------------------------------

/* Aside from just regular, printable characters, Strings can be coded with escape notation.

 \0 = NULL Character
 \' = Single Quote
 \" = Double Quote
 \\ = Backlash
 \n = new line
 \r = carriage return
 \v = vertical tab
 \t = tab
 \b = backspace
 \f = formspace
 \uXXXX = unicode codepoint
 \xXX = Latin-1 character */


//------------------------------------------------------------------------------------------------
//Long Literal Strings
//------------------------------------------------------------------------------------------------

/* There will times where you might have a string that is very long, and will take up a lot of 
space. In order to keep your code easy to read, you can break the string into multiple lines, 
like this: 
let longString = "Hey! How are you? Good, glad to hear that! Me? Oh I'm doing just fine! " +
 				"Thank you for asking. Lorem ipsum there needs to be more text here " +
 				"in this example!";

 You can also use backslashes instead of plus signs. */


 //-----------------------------------------------------------------------------------------------
//Useful String Methods & Properties
//------------------------------------------------------------------------------------------------

/* Strings are the most useful way to hold data that can be represented in text form. Some of 
the most common operations we see on strings are:

 -  .length (checks the length)
 -  + AND += (building/concatenating strings together)
 -  .indexOf() (checks for the location of substrings - or even the existence)
 -  .substring() (extracts specific substrings)

While the above are methods and properties you will see frequently with Strings, there are a few 
other Must Know properties and methods you will come across regularly, as well.

For one, Character Access - this allows you to access a specific character within a string. 
You code this with .charAt() <-- the character number goes in the parentheses. For example: */
return "Rhythm".charAt(2);

/*  */

