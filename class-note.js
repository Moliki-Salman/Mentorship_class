//const multiply = require('multiply-num-package')[0];

//console.log(multiply(3,4))

// To export a package  use: module.export
//module.exports = funcion(a,b) { return a*b };

/* 
store [ 'func' ] in multiply
prrint multiply[0]
*/
 /* 
store [ 'func' ][0]in multiply
prrint multiply
*/

//MATH_CONSTANTS(MATH_CONSTANTS.PI) //reads or gets a value
//MATH_CONSTANTS(MATH_CONSTANTS.PI) = 4 //changes or sets a value


/*#include <stdio.h>

int main() {
 int sum = 1;
   
   for(int i = 1; i <= 100; i+=2){
    sum = sum + i;
    
   }
   printf("%d ", sum);

    return 0;
} */
sum = 0;
for (let a = 1; a <= 100; a+=2) {
        sum= sum + a;
}
console.log(sum);


const sampleName = process.argv[2]

// console.log(`Hello, ${sampleName}! 
// Your name lowercased is "${sampleName.toLowerCase()}"`)

let firstName = process.argv[2]; //ES5 old style

/*console.log('My name is ' + firstName);
console.log('You can also call me ' + '"' + firstName.toLowerCase() + '".');

function printName() {
        const lastName = process.argv[2];
        console.log('My name is ' + lastName);
console.log('You can also call me ' + '"' + lastName.toLowerCase() + '".');
}


function getName(name) {
        console.log('My name is ' + name);
        console.log('You can also call me ' + '"' + name.toLowerCase() + '".');
}
 getName (process.argv[2]);*/
 

 //practice on destructuring
 let nu = [ 9, 8, 7, 3, 5, 6 ];
 let [ban, han, gan, ...other] = nu;
 console.log(other);


 let h = [ 9, 8, 7, 3, 5, 6 ];
 let u = {};
 [u.a, u.b, u.c] = h
 console.log(u)

 let t = { a: "b", b: 6, c: "n" }
 let  {a: d, b: e, c} = t
 console.log(d, e, c)

let o = [ 9, 8, 7, 3, 5, 6 ];
 console.log(o.slice(1, 4))

let user = [ 1, "userDamo", "dam@mail", 20, "Firstname", "lastname"];
 let userObject = {};
[ , userObject.username, userObject.email] = user;
console.log(userObject); 

 let userArray = process.argv.slice(2);
 let newobj = {};
 [, newobj.username, newobj.email] = userArray;
 console.log(newobj);


 

