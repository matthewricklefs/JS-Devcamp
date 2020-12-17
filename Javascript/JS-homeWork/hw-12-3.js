// // 1. Write a function to check if some input is string, and return boolean value

// const myString = function () {
//   var userObj = 'string'
//   return true
// }
// console.log(myString('Hi'))

// // 2. Write a function that will capitalize the first letter in a string

// myCap = function(myStr){
//   return myStr.charAt(0).toUpperCase() + myStr.slice(1);
// }
//  console.log(myCap('dabadee dabadoo'));

// // 3. Given 2 values, return the largest number from a function. Return a message when they are two eqaul values.

// myNum = function(number) {
//   return Math.max.apply(Math, number);
// };
// console.log(myNum([1, 3]))

// // function with two arguments
// // return the largest of the 2 
// // if equal, return some message instead

// // 4. Write a function that joins two strings. Do this 3 different ways.
// //1
// const myStr = 'Hello' + ' ' + 'World';
// console.log(myStr)
// //2
// const myJoin = ['Hello', ' ', 'World'].join('');
// console.log(myJoin)
// //3
// const myFirstStr = 'Hello..';
// const mySecondStr = myFirstStr.concat(' ', 'RYAN!');
// console.log(mySecondStr)



// Jake Mason  6:09 PM
// // 1. Write a function to check if some input is string, and return boolean value
// function checkInput(data)  {
//   var str = data;
//   if (typeof str === typeof '') {
//         return true;
//   } 
//   else {
//     return "It aint a string bro"
//   }
// }
// console.log(checkInput('String'))
// // 2. Write a function that will capitalize the first letter in a string
// function make_upper(data) {
//   var string = data;
//   var shift = string.slice(1);
//   var caps = string[0].toUpperCase();
//   return caps + shift
// }
// console.log(make_upper('jacob'))
// // 3. Given 2 values, return the largest number from a function. Return a message when they are two eqaul values.
// function largestNumber(num1, num2) {
//   if (num1 > num2) {
//     return num1
//   } 
//   else if (num2 > num1){
//     return num2 
//   } 
//   else {
//     return "They are equal buddy try try again "
//   }
// }
// console.log(largestNumber(1, 5))
// console.log(largestNumber(5, 1))
// console.log(largestNumber(1, 1))
// // 4. Write a function that joins two strings. Do this 3 different ways.
// function join_strings(data, dataOne){
//   var string = data
//   var stringOne = dataOne
//   let my_string = string + stringOne  
//   return my_string
// }
// let string = 'Hello '
// let string2 = "My dude"
// console.log(join_strings(string, string2))
// function join(data, dataOne) {
//   return data.concat(dataOne)
// }
// console.log(join(string, string2))
// function str_interpolation(data, dataOne) {
//   var string = data
//   var string1 = dataOne
//   return `${string} ${string1}`
// }
// console.log(str_interpolation(string, string2))



// //RYAN SOLUTION 1//
// function strChecker(value) {
//   return typeof value === 'string' ? true : false
// }

// console.log(strChecker(31))

// //RYAN SOLUTION 2//
// function capitalizeLetter(str){
//   return str.charAt(0).toUppercase() + str.slice(1)
// }
// console.log(capitalizeLetter("jacob"))
// // //RYAN SOLUTION 3//
// function largerNum(int1, int2){
//   return int1 === int2 ?
//    "Those are the same": 
//     int1 > int2 ?
//     int1 :
//     int2
// }
// console.log(largerNum(9, 15))
// // //RYAN SOLUTION 4//
// //1 
// // function strJoiner(str1, str2){
// //   return `${str1} ${str2}`
// // }
// // console.log(strJoiner("h1", "there"))
// //2
// function strJoiner(str1, str2){
//   return capitalizeLetter(str1) + " " + str2
// }
// console.log(strJoiner("h1", "there"))



// //TITLIZER ??
// String.prototype.titleCase = function (str){
//   return str.split(" ").map(word => {
//     return capitalizeLetter(word)
//   }).join(" ")
// }

// titleCase("the quick brown fox jumps over the jordan hudgens")



///////RYANS WORK////////
// Write a function that counts to 10 by 2's
function countToTen(arr){
  for (let i = 0; i < arr.length; i += 2){
    console.log(arr[i])
  }
}
// countToTen(["a", "b", "c", "d"])
// Check if string
function strChecker(value){
  return typeof value === "string" ? true : false
}
// console.log(strChecker("ryan"))
// Capitalize the first letter
function capitalizeLetter(str){
  return str[0].toUpperCase() + str.slice(1)
}
// console.log(capitalizeLetter("jacob"))
function titleCase (str){
  return str.split(" ").map(word => {
    return capitalizeLetter(word)
  }).join(" ")
}
// Largest Num
function largerNum(int1, int2){
  return int1 === int2 ?
     'Those are the same' : 
      int1 > int2 ?
       int1 
      : int2
}
console.log(largerNum(15, 15))
// Join two strings
function strJoiner(str1, str2){
  const conactStrings = function(){
    return str1.concat(" ", str2)
  }
  const conactStringsWithPlus = function(){
    return capitalizeLetter(str1) + " " + str2
  }
  const interpolation = function(){
    return `${str1} ${str2}`
  }
  return [conactStrings(), conactStringsWithPlus(), interpolation()]
  // return capitalizeLetter(str1) + " " + str2
  // return str1.concat(" ", str2)
  // return `${str1} ${str2}`
}
console.log(strJoiner("hi", "there"))
