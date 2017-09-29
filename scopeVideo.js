//Scope - communication between engine and compiler

var number = 2;

//JavaScript IS a compiled language, but very much unlike most other compiled languages.

//3 Steps before Execution:
//1) Tokenizing
	//Break code into small, purposeful tokens for the language to read.

//2) Parsing
	//Turn code into a "tree" of nested elements - known as AST (Abstract Syntax Tree)

//3) Code Generation
	//Turns AST into runnable code:
	//var declaration + identifier = variable
	//variable + var declarator = variable with set values (var number = 2)

//Explained Simply: JavaScript engines do a lot more for us by optimizing the code during parsing & code
//generation, and executing quickly.

//-----------------------------------------------------------------------------------






















//Engine - Responsible for start-finish compilation & execution
//Compiler - Handles all parsing and code generation.
//Scope - Collects a list of variables & decides when they are accessible

var a = 1;








































