function IfElseStatements(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    }else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    };
    
}
console.log(IfElseStatements(30));
  
function switchStatement(val) {
   answer = "";

    switch(val) {
        
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no no 1";
            break;
        case 99: 
            answer = "Missed me by this much";
            break;
    }
    return answer;
}
console.log(switchStatement(99));

/* write a function using object to pass in value and return. */

function objectFunction(val) {
    let result = "";
    
    let lockup = {
        "Nigeria": "Abuja",
        "Germany": "Berlin",
        "Poland" : "Warsaw",
    };

    result = lockup[val];
    
    return result;
};
  console.log(objectFunction("Nigeria"))

  /* checking if an object has a property 
  let myobj = {

    Nigeria: "Abuja",
    Germany: "Berlin",
    Poland : "Warsaw",
  };

  function checkobj(properties) {

    if (myobj.hasProperties(properties)) {
        return myobj[properties];
    } else {
        return "not found!"
    }
  }
  console.log(checkobj("Germany")) */

 /* Math.random is a function that its number is always between 0 and 1. */
  function randomFunction() {
    return Math.random();
  }
console.log(randomFunction());

/* Math.floor function randsdown to the nearest whole number. */
let sampleExample = Math.floor(Math.random) * 30;

function newSampleExample() {
    
    return Math.floor(Math.random) * 3;
}
console.log(newSampleExample());

/* Calculating Range of a number */
function randomRange(myMin, myMax) {
    return Math.floor(Math.random) * (myMax - myMin) + myMin;
}
var myRandom = randomRange(3, 9);

console.log(myRandom);

/* perseInt function takes in a string and returns an integer. 
function convertToInteger(str) {
  
    return parselnt(str);
}
console.log(convertToInteger("45")); */
 

/* Use parseInt function with a Radix. Radix specifies the base of the number such as base2 and 10*/
function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("100001100");

/* Ternary operator
// condition ? statement-if-true : statement-if-false;
you can write the below fuction also in thr Ternary style */
function checkEqual(a,b) {
    if(a ===b) {
        return true;
    }
    else {
        return false;
    }
}
function checkEqual(a,b) {
    return a ===b ? true : false;
}
checkEqual(1,2);

function testNum(num) {
    return num > 5 ? "positive" : num < 2 ? "negative" : "zero"
}
console.log(testNum(1));
/* Const practice*/
function printManyTimes(str) {
    "use strict"

    const SENTENCE = str + "os cool!";

    for (let i = 0;  i < str.length; i++ );
        console.log(SENTENCE);
}
printManyTimes("coding");

/* How to reassign into an Array even when the array is const.*/
const s = [5, 7, 12];
function editInPlace() {
    "use strict";
    s[0] = 3;
    s[1] = 8;
    s[2] = 9;
}
editInPlace();

console.log(s);

/* Prevent Object Mutation*/