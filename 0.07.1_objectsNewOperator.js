//-----------------------------------------------------------------------------------------------------------
//new Operator
//-----------------------------------------------------------------------------------------------------------

/* The new operator has the ability to create a user-defined object type, or one of the built-in object types 
that has a constructor function. The syntax is below: */

new constructor[([arguments])];

/* The parameters of the above, are explained as...
								constructor: a function that specifies the type of the object instance.
								argument: a list of values that the constructor will be called with.


With the new operator being able to create a user-defined object type, there are two steps the user must take
in doing so:
			1) Define the object type by writing a function,
			2) Create an instance of the object with new. */

new greeting(...);

/* When the above code runs, a few things happen...
												1) A new object is created.
												2) The constructor function greeting is called with the specified
											arguments, and with the this keyword is now stuck with the newbie 
											object. new greeting is the same as new greeting(), so if no argument
											is specified, greeting is called without any.
												3) The object returned by the constructor function becomes the 
											result of the entire new expression. If the constructor function 
											doesn't explicitly return an object, the object created in step 1 is 
											used in its place. 
												NOTE: Constructors do not usually return a value, but they CAN in 
												order to override the normal process of object creation. */

//-----------------------------------------------------------------------------------------------------------

/* Using the new operator, you can add a property to an object defined previously in the code. For example - Let's
say there's an object for car. See below: */

car.color = "red"; //This adds the property, color, to car, and gives it the value of "red".. BUT, it is only 
				  //particuclar to that specific object, and therefore, does not have an effect on other objects.
				 //So, to add the color property and "red" value to other objects of the same type, you must 
				//give a new property to the definition of the object type, car. You do this by creating a 
			   //function, which adds a shared property to define all objects declared within that function.
			  //Use the following as an example.

function(car){}
car1 = new car();

car1.color = "gray";
console.log(car1.color); //Comes back as gray!

//-----------------------------------------------------------------------------------------------------------

/* Using the new operator to mix up object type, the following code is an ideal way to do so: */

function friend(fName,lName, age, drive){
	this.fName = fName;
	this.lName = lName;
	this.age = age;
	this.drive = drive
} //You can now use the above to create an object, like below:

let friend1 = new friend("Tiah", "Nasser", 22, tiahCar);
let friend2 = new friend("Mady", "Ward", 23, myCar);

//You can continue this process however many times you may need.

//-----------------------------------------------------------------------------------------------------------

/* And lastly, using the new operator to mix up an object instance: */

function cars(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}
let tiahCar = new cars("Volkswagen", "Jetta", 2011);
let myCar = new cars("Volkswagen", "GTI", 2016);

//From here, you can rewrite the friends function to add a drive property, that takes a cars object.








