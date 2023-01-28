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

/* Prevent Object Mutation with OBJECT.FREEZE
 write a function that freezes an object
function freezeObj() {
    "use strict"
    const MATHS_CONSTANTS= {
        PI: 3.24
    }

    object.freeze(MATHS_CONSTANTS);

    try {
        MATHS_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATHS_CONSTANTS.PI;
}

const PI = freezeObj() */

/* rewrite this finction to an arrow function
var magic = function() {
    return new Date();
}; */
var margic = () => new Date();

/* var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
*/

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* Arrow function takes other function as argument
complete the square of only positive integer of the array.*/
const realNumberArray = [4, 5.6, -9.8, 3.14, 43, 5, 8.45, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* Arrow function with Default parameters or arguement*/

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(4, 5));
console.log(increment(8));

/* Array Iteration: 8 methods.to iterate means you are going to array to something with each item of thr array, not necessarily every item of the array. 
1- forEach() does something for each item in the array */
 [1, 2, 3].forEach(function (item, index){ //here we pass in item and idex of the array into the function
    console.log(item, index);
 }); //1 0, 2 1, 3 2

//how to remove the first odd number in an array with forEach()
let numbers = [3, 4, 8, 20];
let odd = 3;

numbers.forEach(function(number) {
    if(number === odd) {
        numbers.shift();
    }
})

console.log(numbers); //[ 4, 8, 20 ]

//-2 map, it takes item from the array does something to it and plces the new value back in to the array(a modified element). 
const three = [1, 3, 4];
const newThree = three.map(function(item) {
    return item * 2;
});
console.log(newThree); //[ 2, 6, 8 ]
let arr = [3, 6, 9];
let newArr = arr.map (function(element){
    return element * 3;
});
console.log(newArr);  // [ 9, 18, 27 ]

//-3 filter(), the filter creates a new array and returns all the items which pass the condition specifoes in the callback
const ints = [1, 2, 3, 4, 5, 6]
const newInts = ints.filter(function(element){
    return element % 2 === 0;
});
console.log(newInts); //[ 2, 4, 6 ]

//-4 Reduce() the reduce() method reduces an array of values doen to just one value. this single values that is returned can be any type.
let sampleArr = [ 2, 4, 6, 8];
let newSampleArr = sampleArr.reduce(function(result, element) {
    return result + element;
}, 0);
console.log(newSampleArr); //20


//-5 some() The some() array method returns boolean value(true/false) based on at least one element in the array passing the condition in the function. 
const examArr = [2, 4, 5, -3, -1, 8, 0];
const newExamArr = examArr.some(function(element) {
    return element < 0;
});
console.log(newExamArr); // true

//-6 every() the every() method detects if every elements of the array satisfies the condition passed in the function
const everyItem = [2, 3, 4, 5];
const newEveryItem = everyItem.every(function(element) {
    return element > 0;
});
console.log(newEveryItem); // true. 

//-7 find () the find() metthod returns the first matched element from the array that satisfies the condition in the function. 
let objects = [{ id: 'a' }, { id: 'b' }, { id: 'c'}];
let found = objects.find(function(item){
    return item.id === 'b';
}); 
console.log(found); // { id: 'b' }

//-8 findIndex(), It returns the index of the element we find using the find() metthod. if no elements match the condition, the findIndex() methid returns -1. 
let objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c'}];
let foundIndex = objects2.findIndex(function(item){
    return item.id === 'c';
}); 
console.log(foundIndex); // 2 because its index 2


/* REST OPERATOR IS REPRESENTED WITH 3DOTS (...)
the rest operator allows tou take a variable number of argument */