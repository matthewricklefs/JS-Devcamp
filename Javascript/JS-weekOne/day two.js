// Basic Syntax Using Conditionals //

// var age = 10;
// var ageTwo = '12';

// if (age === ageTwo) {
//   console.log('They are equal');
// }

// if (age !== ageTwo) {
//   console.log('Not equal');
// }

// if (age >= 25) {
//   console.log('Old enough to rent a car');
// }

// if (age <= 10) {
//   console.log('You can eat from the kid menu');
// }

// Guide to If/Else Conditionals in JavaScript //

// var age = 30;

// if (age <= 10) {
//   console.log('You can eat from the kid menu');
// } 


// if (age <= 10) {
//   console.log('You can eat from the kid menu');
// } else {
//   console.log('Adult menu time for you');
// }

//// Compound Conditionals in JavaScript ////
// We recognize that there is a hole is this code logic covering ages 11 -15. As was discussed in the lesson this does happen.
// Try playing with the code and fixing the hole in the logic for practice.
// var age = 30;

// if (age <= 10) {
//   console.log("You can eat from the kid's menu");
//   console.log("You are not old enough to drive");
//   console.log("You are not old enough to rent a car");
// } else if (age >= 16 && age < 25) {
//   console.log("You can not eat from the kid's menu");
//   console.log("You are old enough to drive");
//   console.log("You are not old enough to rent a car");
// } else if (age >= 25) {
//   console.log("You can not eat from the kid's menu");
//   console.log("You are old enough to drive");
//   console.log("You are old enough to rent a car");
// }

//// How to Build a Switch Statement in JavaScript to Check for Data Types ////

// var dataPoint = {};

// switch (typeof dataPoint) {
//   case "string":
//     console.log("It's a string");
//     break;
//   case "number":
//     console.log("It's a number");
//     break;
//   case "boolean":
//     console.log("It's a boolean");
//     break;
//   default:
//     console.log('No matches');
// }

//// Overview of JavaScript Ternary Operator ////

// function ageVerification(age) {
//   if (age > 25) {
//     console.log('can rent a car');
//   } else {
//     console.log("can't rent a car");
//   }

//   return age > 25 ? "can rent a car" : "can't rent a car";
// }

// ageVerification(30); //?
// ageVerification(10); //?

// function adminControls(user) {
//   if (user) {
//     if (user.admin) {
//       return 'showing admin controls...';
//     } else {
//       return 'You need to be an admin';
//     }
//   } else {
//     return 'You need to be logged in';
//   }

//   return user
//     ? user.admin ? "showing admin controls" : "You need to be an admin"
//     : "you need to be logged in";
// }

// const userOne = {
//   name: "Kristine",
//   admin: true
// };

// adminControls(userOne); //?

// const userTwo = null;

// adminControls(userTwo); //?

// const userThree = {
//   name: "Tiffany",
//   admin: false
// };

// adminControls(userThree); //?
/////GO THROUGH THESE NOTES TERNARY OPERATORS ARE CONFUSING///////
// example of ternary BEST PRACTICE//
// let response = user ?
//     user.admin ?
//     "showing admin controls..." :
//     "You need to be an admin":
//     "You need to be logged in";
// console.log(response);
//                   //


//// Section Introduction: Introduction to JavaScript Functions ////

// Basic Syntax for Building Functions in JavaScript //

// function hiThere () {
//     console.log('Hi there');
// }

// hiThere(); // Hi there

// function hiThereTwo() {
//     return 'Hi there again';
// }

// hiThereTwo(); // "Hi there again"

// var storedText = hiThere(); // Hi there

// storedText; // undefined

// var storedTextTwo = hiThereTwo();

// storedTextTwo; // "Hi there again"


//Create an Array Popper that Alternates Returning from Each Side of an Array in JavaScript //

// class ArrayPopper {
//   constructor(arr) {
//     this.arr = arr;
//     this.atBeginning = true;
//   }

//   togglePopper() {
//     this.atBeginning = !this.atBeginning;
//     return this.atBeginning ? this.arr.pop() : this.arr.shift();
//   }
// }

// const ap = new ArrayPopper([1, 2, 3, 4, 5]);

// ap.togglePopper(); //?
// ap.togglePopper(); //?
// ap.togglePopper(); //?
// ap.togglePopper(); //?
// ap.togglePopper(); //?
// ap.togglePopper(); //?

// // How Variable Scope Works in JavaScript ////

// var userObj = {
//   email: 'sample@example.com',
//   fullName: 'Kristine Hudgens'
// }

// function dashboardGreeting() {
//   var userObj = {
//     email: 'sample2@example.com',
//     fullName: 'Jordan Hudgens'
//   }
//   console.log("Hi there, ".concat(userObj.fullName));
// }

// dashboardGreeting();
// console.log(userObj.fullName);

// Differences Between Function Expressions and Function Declarations //

// var greeting = function () {
//  return "Hi there!";
// };

// var age = 4;

// if (age <= 10) {
//   var buildMenu = function () {
//     return "Kids' Menu";
//   };

//   function wrongMenuBuilder () {
//     return "Wrong Kids' Menu";
//   }

//   console.log(buildMenu());
//   console.log(wrongMenuBuilder());
// }

// // How to Work with Function Arguments in JavaScript //

function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));

// Function Arguments: Reference vs Value //

var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"

