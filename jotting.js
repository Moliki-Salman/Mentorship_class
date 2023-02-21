/* const test = ['banana', 'apple', 'mangoe'];
const newTest = test.map(function(string) {
        return string[0]
}); 
console.log(newTest.join(''));

const fruit = ['banana', 'apple', 'mangoe'];
const newFruit = fruit.map((string => string[0]));
console.log(newFruit.join(""))

var fruit = process.argv.slice(2); 
newFruit = fruit.map(string => string[0]);
console.log(newFruit.join('')); */

/*var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(function () {
                console.log(this.yelp);
            });
        }
    };
    foot.kick();

    var foot = {
        kick: function () {
            this.yelp = "Ouch!";
             setImmediate: () => console.log(this.yelp);
        }
    };
   
// let userInfo = {
        userId: "01",
        username: "meen",
        email:"sa@hmail",
        firstName: "Dan",
        lastName: "Man",
// } 
// let {uername: newUserName, email} = userInfo;
// console.log(newUserName, email)*/

/*var numbers = [1, 1, 2, 3, 5, 8];
    var max = Math.max(...numbers);
    console.log(max);

var num = [3, 6, 9, 19];
var min = Math.min(...num);
console.log(`The minimum of ${[num]} is ${min} `);
        
var num = (process.argv.slice(2));
var min = Math.min(...num);
console.log(`The minimum of [${num}] is ${min}`)*/

 /*let avrgFunction = function() {
    let avrgNum = [2, 4, 5, 6, 7];

     let result = 0;

    for (let i = 0; i <= avrgNum.length; i++ );
     result += i;

    console.log(totalAvrgNum);

 }

tArray = [1, 2, 3, 4, 5,];
 function average(array) {


    var total = 0;
    var count = 0;

    array.forEach(function (value)  {
        total += value;
         
         count++;
    });

    return total / count;

 };

 console.log(average(tArray));

 //const midpoint = (p1, p2) => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];

// let midpoint = ([x1 = 0, y1 = 1]) => [(x1+ y1) / 2];

/* console.log(midpoint([, 7]))
  function midpoint([x1 = 0, y1 = 1]) {
    return [(x1+ y1) / 2];
 };
 console.log(midpoint([ ])) */


function repeatString(string, item) {
    var exclamation = "!"
   if (string > 0) {
    return `${exclamation.repeat(string.length)}`;
   }
   else 
   return '';

};
console.log(repeatString(`joo`, 5)) 

/*module.exports = {
     repeatString: function(string, times) {
    var  a = "!";
    if (times > 0) {
        return (`${string}`+ a.repeat(times));
    }
     else
     return " ";
}
}
console.log(repeatString("hello", 5));*/

/*
Default parameters: This is when you assign a default parameters/value to a data type declared within a function paranthesis() incase a value/parameters is not assigned to the data types
*/

var defaultParameter = function(name = 'Aminah', age = 39) {
	console.log("my name is: " + name, "and my age is: " + age) 
};
defaultParameter();
