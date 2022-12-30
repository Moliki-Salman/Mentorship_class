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

/*Global vs Local Scope and Function. it is possible to have both local and global variable 
with the same name. when you do this, the local variable takes precidence over the Global variable. */
var outerWear = "T-Shirt";

function myOutfit() {
    return outerWear; //this function calss myOutfit that will return oyterWear.
 
}
console.log(myOutfit()); //HERE it prints T-Shirt becuase the global variable is defined. 


var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"
    return outerWear; //this function calss myOutfit that will return outerWear.
 
}
console.log(myOutfit()); // here it prints 'sweater'  instead of "T-Shirt" because the local var takes precedence.  
console.log(outerWear); // however, here it prints "T-Shirt" because we console.log the global var which is T-shirt. 

/* Return a value from a Function with return statement. Note: we are passing a number into the function minuSeven, which is the (num) */ 
function minusSeven(num) {
    return num - 7; //its going to return whatever is after the return keyword whic is - 7
}
console.log(minusSeven(10)); // so it prints the the value of minusSeven "-7" then 10 -7 = 3. it prints 3. 

function  timesFive(num) {
    return num * 5;
}
console.log(timesFive(6));

/* Understanding Undefined Value Returned from a Function 
functions can have return statement but they dont have to. if you dont specify the return value then the return value is undefined */ 
 var sum = 0;
 function addFour() {
    sum = sum + 3;
 } //this function adds three to the sum variable which is a global variable becuase its defined b4 the function.  It does not return anything bcos no return value is specified.

 function addSix() {
    sum += 5;
 } //its not going to return anything bcos no return value was defined.

 /* Assignment with a Returned value. */
 var changed = 0; // this is initializing the variable process. 

 function change(num) {
    return (num + 5) / 3;
 } //we have the function change and we pass in a num and it will return the value of the maticmatical expression

 changed = change(10); /*here we call the function change and pass in 10 as the num, 
 the value that is returned from the above expression will be stored in the variable changed */
 console.log(changed);


 var processed = 0;

 function processArg(num) {
    return (num - 5) / 4;
 }
 processed = processArg(8);
 console.log(processed);


 /* Stand in Line. in computer science a Queue is where items are kept in order, new items are added and older items are removed from the front of the queue.
 the purpose of this 'nextInLine function' here is that you can add an item to the arr passed in
 and is going to return the first item of the list. */
function nextInLine(arr, item) {

    arr.push(item); // we but the arr that was passed above and them we push an item into the var testArr.  the push () method add an item to the list
    return arr.shift(); // shift () removes the first element of an array from the list and also returns the first elemrnt removed. in this case it will return 1 which is the first item/element. 
}

var testArr = [1,2,3,4,5]; /* for instance when we add an item to the list in this array, it should come after "5" which is the last on the list
and then should return the first item of the list in this case its "1" */

//Display code
console.log("Before: " + JSON.stringify(testArr)); /* this shows what the array looks like b4 hand. the JSCON.stringify is just a way to change an array 
into a string that can easily be as a string. */
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); //this shows what the array looks like  afterwards.


function nextInLine (arr, item) {

    arr.push(item);
    return arr.shift();
}
var sampleArr = [1,2,3,6,8,9];

console.log("Before: " + JSON.stringify(sampleArr));
console.log(nextInLine(sampleArr, 7));
console.log("After: " + JSON.stringify(sampleArr));

/* Boolen values. Booleans are a data type in JS . there are only two values True or False. usually when TRUE is on FALSE is off vise versa.*/
function welcomeToBooleans() {
    return false; //it can either return true or false.
}

/* Use Conditional  Logic with if Statements. if statement is used to make. decisions in code.
the keyward if tells JS to execute the code in the {} under certain conditions defined in the ()
if the variable inside the () is true it will return the first the first statement in the function: "Yes, it's true",
and if its not true it will return the second statement of the function: "No, it's false"  
note: the whole funcyion takes in a variable: (isItTrue). */
function myTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log(myTrueOrFalse(true)); //since we passed in true, it prints Yes, it's true".

function ourTrueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(ourTrueOrFalse(false)); //since we passed in false, it prints "No, that was false".

/* Comparison with the Equality Operator == */
 function testEqual (a) {
    if (a == 12) {   //we want to check if a equals 12. note == is the equal sign, while = is the assignment operator. 
        return "Equal";
    }
    return "Not Equal";
 }

 console.log(testEqual(10)); //the tesrEqual function will test if the number we are passing is equal to 12.

 function newVar (x) {
    if (x == 20) {
        return 20;
    }
    return 30
 }
 console.log(newVar(23));

 /*  Comparison with  the Strict Equality Operator === 
 
 the differnce btw == and === is that == converts the datas into a common type,
 whille this === does not do the type conversion. 
 3 === 3 this will evaluate to true
 3 === '3' while this will evaluate to false. while if it were 3 ==3 and 3 == '3'
  will be true because the '3' will be converted to a number. 
 */
 function testStrict(val) {
    if (val === 6) {
        return "Equal";
    }
    return "Not Equal"
 }

 console.log(testEqual('6')); // its prints not equal becuase its '6' is differnt from 6 when === interpretes. 

 /* Practice Comparising Differnt Values */
 function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
 }

 console.log(compareEquality(10, '10')) //its returns "Equal" because the == converts the data type fron string to number.

 function newCompareEqual(x, y) {
    if (x === y) {
        return "Equal";
    }
    return "Not Equal";
 } 
 console.log(newCompareEqual(10, '10')) //its returns " Not Equal" because the === does not converts the data type fron string to number.

 /* Comparison with Inequality Operator != 
 we are checking if 10 is not equal 80 */
 function testNotEqual(val) {
    if (val != 80) {
        return "Not Equal";
    }
    return "Equal";
 }

 console.log(testNotEqual(10)); // its prints out "Not Equal" because the value passed which is 10  is not equal 80. 

 /* Comparison with the Strict Inequality Operator 
 we are checking if 6 is not equal 3 but with the strict not equal operatpr.*/
function testStrictNotEqual(val) {

    if (val !== 6) {
        
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(3));

/* Comparison with the Logical and Operator. */
function testGreaterThan(val) {
    if(val > 100) {
        return "Over 100";
    } //checking if value is gereater than 100

    if (val > 10) {
        return "Over 10";
    } //checking if value is greater than 10

    return "10 or Under";

}
console.log(testGreaterThan(10)); //its prints "10 or Under" becuase the value passed is 10 and not greater than 10 or 100. 

/* Comparison with the Greater Than Or Equal To Operator*/
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}
console.log(testGreaterOrEqual(10)); // its prints "10 or Over" because the value passed is 10 . 

/*  Comparison with the Less Than Operator. */
function testLessThan(val) {
    if (val < 25) {
        return "Under 25"
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}
console.log(testLessThan(10)); // its prints "Under 25" because the value 10 that was passed is less than 25 and also the first if statement must be checked and if there is result it authomatically ignore other if statement stated. 

/* Comparison with the Less Than or Equal To Operator */
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12"
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24"
    }

    return "More Than 24";
}
console.log(testLessOrEqual(10)); // it returns "Smaller Than or Equal to 12"

/* Comparisons with the Logical And Operator "&&"
the example shows a nested/two if statment to be interpreted using the "And &&"  operator */
function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) { //both val <= 50 and val >= 25 have to be TRUE to get "Yes"
        return "Yes";
        }
        return "No";
    }
console.log(testLogicalAnd(30)); //its prints Yes because boths if conditions are true. 

/* Comparison with the Logical Or Operator "||" */
function testLogicalOr(val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside"
}
console.log(testLogicalOr(15)); //its prints "Inside" because the if statement is false.


