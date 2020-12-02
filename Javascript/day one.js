// Intro to JS //

// var hello_world = "Hi there";
// console.log(hello_world);

// var name = 'Kristine';
// console.log(name);

// alert(name);

//Two main ways to Declare Variables in JS
// var age = 12; //can be changed 
// let name = 'Kristine'; //cannot be changed

// console.log(age);
// console.log(name);

// var name, city, age; // variables can be defined at a later point 

// name = 'Kristine';
// city = 'Scottsdale';
// age = 12;

// console.log(age);
// console.log(name);
// console.log(city);


// Difference between Var and Let //

// var age = 12;
// console.log(age);

// var age = 15;
// console.log(age);

// How let works
// let age = 12;
// console.log(age);
// if age has already been declared we will have Syntax Errors
// let age = 5;
// console.log(age);
// // you can reassign the value though.
// age = 12
// console.log(age);

//Hoisting in JS //

// only works w/ declaration NOT assignment
// variable is initialized when it is declared AND assigned
// name = 'Kristine';
// console.log(name);
// var name;


//Syntax for JavaScript Comments //

// You can put anything you want here
// console.log('Hi there'); // Here is another comment

//Multi Line Comment
/*
Anything
you want
here
*/

// Comprehensive List of Javascript Data Types //

// // Boolean
// var truthy = true;
// var notTruthy = false;

// // Null
// // the absence of a value
// var nully = null;

// // Undefined
// // nothing is defined or assigned YET
// var notDefined;

// // Number
// var age = 12;

// // String
// var name = "Kristine";
// var nameTwo = 'Jordan';

// // Symbol
// var mySym = Symbol('foo');

// console.log(mySym);

// Guide to JavaScript Objects //

// var user = {
//   name: 'Kristine',
//   age: 12,
//   city: 'Scottsdale',
//   grades: {
//     math: 90,
//     science: 80,
//     languageArts: 100
//   }
// }
// user.age = 13;
// user.grades.coding = 95;

// How to Check for Data Types in JavaScript //

// typeof 12;
// // "number"

// typeof 'Astros';
// // "string"

// typeof true;
// // "boolean"

// typeof { name: "Kristine" };
// // "object"

// var age;
// // undefined

// typeof age;
// // "undefined"

// age = null;
// // null

// typeof age;
// // "object"

// How to Perform Type Casting in JavaScript //

// "100" + 42; // "10042"
// 42 + "100"; // "42100"
// "100" - 42; // 58
// 100 + null; // 100

// var ageOne = 12;
// String(ageOne); // '12'
// ageOne.toString(); // '12'

// var ageTwo = '33';
// Number(ageTwo); // 33
// parseInt(ageTwo); // 33
// parseFloat(ageTwo); // 33
// + ageTwo; // 33
// parseInt('5555555555 is my phone number'); // 5555555555
// parseInt('foo 5555555555 is my phone number'); // NaN
// Number("100") + 42; // 142

// Number(true); // 1
// Number(false); // 0

// Working with String Functions - Part 1 //

// var str = 'The quick brown fox jumped over the lazy dog';

// str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

// str.length; // 44

// str.charAt(2); // "e"

// str.charAt(200); // ""

// str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

// str; // "The quick brown fox jumped over the lazy dog"

// str.includes('quick'); // true

// str.endsWith('dog'); // true

// str.startsWith('Foo'); // false

// Working with String Functions - Part 2 //

// str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

// str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

// '555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

// str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

// '555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

// 'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

// str.indexOf('jumped'); // 20

// str.lastIndexOf('jumped'); // 20

// var str2 = str.concat('again and again');

// str2.indexOf('again'); // 44
// str2.lastIndexOf('again'); // 54

// Working with String Functions - Part 3 //

// str.slice(4, 10); // "quick "

// str.slice(-8); // "lazy dog"

// str.slice(10); // "brown fox jumped over the lazy dog"

// str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

// str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

// var messyString = '    Hi there    ';

// messyString.trim(); // "Hi there"

// JavaScript Arithmetic Operators //

// 2 + 2; // 4

// 2 - 2; // 0

// 2 / 2; // 1

// 2 * 10; // 20

// 5 % 2; // 1

// 10 % 2; // 0

// 8 % 2; // 0

// 2 ** 10; // 1024

// var num = 2;

// num++; // 2

// ++num; // 4

// num; // 4

// num--; // 4

// num; // 3

// --num; // 2

// 2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

// ++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

// var someNum = 10;

// var someOtherNum = -someNum;

// someOtherNum; // -10

// var strNum = '100';

// var convertedNum = + strNum;

// convertedNum; // 100

// Guide to Compound Assignment Operators in JavaScript //

// var name = 'Tiffany';

// var sum = 0;

// var gradeOne = 100;

// var gradeTwo = 80;

// sum += gradeOne; // 100

// sum; // 100

// sum += gradeTwo; // 180

// sum *= gradeTwo; // 14400

// Order of Operations in JavaScript //

/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
   Paranthesis
   Exponents
   Multiplication 5 / 5 * 4
   Division
   Addition
   Subtraction
*/

// var num = 5 + (5 * 10) / 6**2 - 1;
// var num = 5 / 5 * 4;

// JavaScript Conditional Section Introduction //
// Basic Syntax for Using Conditionals in JavaScript //

var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}