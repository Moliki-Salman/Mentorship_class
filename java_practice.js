console.log("first Java practice with github");
/* three ways to declare a variable in  Java*/
// var var is used through out the program. Var can be changes 
var myName = "Damilola";
//let: let is only used with in the scope of where you declare them
let  ourName = "Meenadcode";
//const: const is a variable that should never change 
const n = 2.5;
var a = 10
console.log(a);
var sum = 10 + 3;
console.log(sum);
//incrementing number: this is when you add 1 to a number
var myVar = 45
myVar = myVar + 1;

/* a = a + 12; is d same as using the += operator: a+= 12;
b = 9 + b; is d same as using the += operator: b+= 9;
c = c + 7;  is d same as using the += operator: c+= 7;
the above example is both adding and assigning  value to the variable 
NOTE: this short cut is also applicable to *= and /= */


/* In Java  quotation  mark “ ” is needed to write a string e,g var myLastName = “Moliki”. 
However if you have many quotation mark in a string eg “my name is” Damilola Moliki” Salman”;
it is important to add the back slash mark \ before each string so that Java can interpret it 
properly as one single string like this:  
var myStr =   “my name is \” Damilola Moliki \” Salman”; */
/*  Another way this can be done is to use the single quote character to write your string in 
Java and here you do not need to add the back slash: 
var myStr =   ‘my name is ” Damilola Moliki ” Salman’; 
this previous example Java will interpret it as a string even though it has double quotation inside.*/

/* Concatenating string with plus operator*/
var ourStr = "I came first. " + "I came second. ";
console.log(ourStr)
/* in the above example, the plus sign is used to add the two sting together to make one. 
However, note that after each string, it is important to leave a space b4 closing the 
b4 closing the quotation */
/* You can also use to plus equal to add in a string. In the below example you have added the
two string together. */
var myStr ="I come first.";
myStr+="I come second.";

/*Concatenating strings with variable*/
var ourSchool = "Meenad studios ";
var ourSchoolName = "My school name is " + ourSchool + " and it is the best";
console.log(ourSchoolName)
/* Appending variable to string */ 
var firstVar = "school is ";
var lastVar = "interesting";
firstVar += lastVar
/* finding the length of a string,
.length is used to find the number of character in a string. */
var lastNameLength = 0;
var lastName = "Moliki-Salman";
lastNameLength = lastName.length;
console.log(lastNameLength)

/* Bracket Notation [] to find the charcter in String
Bracket notation [] is a way to get a characters specific location in a string
In Java, characters starts counting from zero 0. The first character of a string represents 0, second 
 charcter is 1, third charcter is 2 and so on. */
var letterCharacterString= "";
var Name = "Moliki-Salman";
letterCharcterString = Name[4];
console.log(letterCharacterString)

/* you can find the last charcter in a string using .length
" - 1 " because we start counting from 0, so u get the last index in the string,
the - 1 will give the last letter of the last name which is "d"   */
var randomName = "covid";
var lastLetterofrandomName = randomName[randomName.length - 1];
console.log(lastLetterofrandomName)

/*ARRAY Arrays allows you to several pieces of data in one place. Arrays starts with a bracket and
ends with a bracket to show the beginning and ending of the array []*/
var myArray = ["peace", "unity", 97];

/*  Array: this is when an array is inside another another array, it is called a nested array */
var nestedArray = [["my name, 35"], ["school is good, 45"]]
/* Access array data with index */
var myArray = [18, 43, 88];
myArray[1] = 63; /* this means that 43 in the previous has changed to 63*/

/* Access Multi-Dimensional Arrays with Indexes 
You can also use bracket notation to select an element in a multi-dimensional or array of arrays.*/
var myArray = [[1,2,3], [4,5,6], [7,8,9],[10,11,12], 13,14];
var myData = myArray[2][1];
console.log(myData);
/* [2] in the above example shows that the 8 is inside the third array and the [1] indicates that 8 is the second number inside the third array.*/

/* Manipulate Arrays with Push ()
You can append data to the end of an array with the push function. */
var myArray = [["peace", 20], ["joy", 39]];
myArray.push(["Happy", 50]);
console.log(myArray);
/* Manipulate Arrays with pop ()
We can remove from element in the array with the pop function*/
var myArray = [1,2,3];
var removedFromMyArray = myArray.pop();
console.log(myArray);

/* Manipulate array with shift(), the shift functio removes the first element of an array*/
var myArray = [["Lucas, 55"], ["Fat, 13"]];
var removedFromMyArray = myArray.shift();
console.log(myArray);

/* Manipulat array with unshift(), the unshift function adds an element to the beggining of the array*/ 
var myArray = [["beans"],["rice"],["potatoes"]]
myArray.shift(), //myArray now equals  [["rice"] ["potatoes"]]
myArray.unshift(["yam"]);
console.log(myArray);



/* FUNCTIONS: functions allows us to create reusable code in JS 
 we call "function", then the function name, then  the parenthesis (),
 note: we can pass something into the parenthesis (), then we have the corlly bracket { console }, 
 and everything inside the {} appears every time the function is called. */
 
 function reusableFunction() {
    console.log("Hello friends");
 }
/*now call the function and remember the parenthesis (),  */
 reusableFunction();
 
  /* passing values to Functions with Arguements.  parameters are variables that acts
as placeholders to values that are to be input to a function when it is called. 
when the function is called we have to input/pass data into the function*/
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}  // note that a and b can be anything
ourFunctionWithArgs (10, 5); //outputs 5

function myFunctionWithArgs (x, y) {
    console.log (x + y)
}
myFunctionWithArgs (18, 6);
 
/* Global scope and Functions. scope refers to the visibility of variables. 
variables that are defined outside the function block are refers to GLOBAL SCOPE.
global scope means it can be seen everywhere in your JS code  */


var myGlobal = 10; /* since the var is set outside the function block, it can be seen everywhere even inside the function block. it appears insdie fun2*/

function fun1() {
    oopsGlobal = 5; /* IT IS POSSIBLE TO SET A VARIABLE WITHOUT USING THE var. nomally if you use a var keyward here with the variable name, 
    this variable  oopsGlobal = 5 will be scoped to only this particular function. however since the var keyward was not added, this variable become global automatically.
    meaning that you can access it anywhere in the program, that is why we can still use it inside fun2 */
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    } /* this if statement above is checking if the type of myGlobal does not equal != 'undefined', 
    so it will not equal undefined if it has been defined and the program knows about the variable.
    since myGlobal is in global scope outside the function, it does not equal undefined but equals 10 
    because the program knows about the varaibale.
    so the    will run what is in this if statement while we just add what is in the output "myglobal:"  
    and the value of myGlobal which is 10. so it prints out myGlobal: 10. */
    
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

/*Local Scope and Functions. variables which are declared within a function aswell 
as in the parameters of the function has local scope. that means they are only visible 
from within the function */ 
function myLocalScope() {
    var myVar = 5; // this variable is declared inside a function, so the variable myVar is only visible inside this function.
    console.log(myVar);
}

/*Global vs Local Scope and Function. it is possibke to have both local and global variable 
with the same name. when you do this, the local variable takes precidence over the Global variable. */
var outerWear = "T-Shirt";

function myOutfit() {
    return outerWear; //this function calss myOutfit that will return oyterWear.
 
}
console.log(myOutfit()); //HERE it prints T-Shirt becuase the global variable is defined. 


var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"
    return outerWear; //this function calss myOutfit that will return oyterWear.
 
}
console.log(myOutfit()); // here it prints 'sweater'  instead of "T-Shirt" because the local var takes precedence.  
console.log(outerWear); // however, here it prints "T-Shirt" because we console.log the global var which is T-shirt. 