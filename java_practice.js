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




 


