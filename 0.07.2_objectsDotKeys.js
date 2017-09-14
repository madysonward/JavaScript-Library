//***************************************************************************************
//Object.keys()
//***************************************************************************************

/* The Object.keys() method returns an array to represent all own enumerable properties of a given object. 
This occurs in the same order that a for...in loops would give. It is coded like this: */

Object.keys(obj);

/* NOTE: obj acts as a parameter, and is defined as the object of which the enumerable own properties are 
to be returned.

Object.keys() returns an array of which the elements are strings corresponding the enumerable properties 
found directly upon Object. The order of the properties is equivalent to the one stated by looping over
the properties manually. Example code: */

let arr = ["x", "y", "z"];
console.log(Object.keys(arr)); //will come back as 0, 1, 2

//array-like object below:
let obj = {0: "c", 1: "b", 2: "a"};
console.log(Object.keys(obj)); // will come back as 0, 1, 2

//array-like object w/ random key ordering
let obj1 = {55: "hello", 11: "hi", 2: "hey"};
console.log(Object.keys(obj1)); //will come back as 2, 11, 55