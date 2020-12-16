// Function using JS to convert a given numver into an array of digits. //

// //1st Solution//

// const numToArray = (number) => {
//   let array = number.toString().split("");
//   	return array.map(i => parseInt(i));
// }

// console.log(numToArray(123456));
// console.log(numToArray(5432));

// //2nd Solution//
// function numberToArray(num) {
//   return [...`${num}`].map(i => parseInt(i))
// }
// console.log(numberToArray(12345))

// How to Run JavaScript Scripts in the Browser Console //

function fullName(first, last) {
  return `${first} ${last}`;
}

fullName('Kristine', 'Hudgens');


newFullName = (first, last) => {
  return `${first} ${last}`;
}

newFullName('Kristine', 'Hudgens');

// Comparison of Chrome's Command Line API vs Vanilla JavaScript //

// Source page: http://www.dailysmarty.com/

// Console with Command Line API / Firebug
$('.image-item')
$('.image-item').first // returns function
$('.image-item').first()
$('.image-item').first().hide()

// Compared with
document.getElementsByClassName('post-item-wrapper')[0].style.display = 'none';