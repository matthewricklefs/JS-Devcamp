// // Increment by 2 //

// function counter() {
//     for(var i = 0; i <= 10; i += 2) {
//         console.log(i);
//     }
// }

// counter();

// Introduction to JavaScript Closures // 

// function battingAverage () {
//   var hits = 100;
//   var atBats = 300;

//   return {
//     getCurrentAverage: function () {
//       return (hits/atBats);
//     },
//     updateHitsAndAtBats: function (hit, atBat) {
//       hits += hit;
//       atBats += atBat;
//     }
//   }
// }

// var altuve = battingAverage();
// console.log(altuve.getCurrentAverage());
// altuve.updateHitsAndAtBats(0, 20);
// console.log(altuve.getCurrentAverage());

// Introduction to HTML Scripting with Built in JavaScript Functions //

// document.getElementsByClassName('b1')[0].innerHTML = 'Hi there';

// Introduction to the 'this' Keyword in JavaScript //

// $('.btn-guide').click(function(event) {
//     event.preventDefault();
//     console.log($(this));
// });


// How to Use the 'this' Keyword in JavaScript Programs

// var guide = {
//   title: 'Guide to Programming', //
//   content: 'Content goes here...',
//   visibleToUser: function (viewingUserRole) {
//     if (viewingUserRole === 'paid') {
//       return true;
//     }
//   },
//   renderContent: function(userRole) {
//     if (this.visibleToUser(userRole)) {
//       console.log(this.title + " - " + this.content);
//     } else {
//       this.content = '';
//       console.log(this.title + " - " + this.content);
//     }
//   }
// }

// user = { role: 'paid' };
// guide.renderContent(user.role);

//// Section Introduction: Introduction to JavaScript Arrays//
//// How to Create Arrays in JavaScript ////

// var generatedArray = new Array(3); // [undefined, undefined, undefined]

// var literalArray = [1, 2, 3];

// var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }];


// Guide to Adding and Removing Array Elements in JavaScript//

// var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

// arr.pop(); // "Springer"

// arr; // ['Altuve', 'Bregman', 'Correa']

// arr.push('Bagwell'); // 4

// arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

// arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

// arr.unshift('Kyle'); // 4

// arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']


///How to Use the Splice Function in JavaScript to Remove Specific Array Elements///

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]