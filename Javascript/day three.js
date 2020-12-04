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

var guide = {
  title: 'Guide to Programming', //
  content: 'Content goes here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    }
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {
      console.log(this.title + " - " + this.content);
    } else {
      this.content = '';
      console.log(this.title + " - " + this.content);
    }
  }
}

user = { role: 'paid' };
guide.renderContent(user.role);

//// Section Introduction: Introduction to JavaScript Arrays//

