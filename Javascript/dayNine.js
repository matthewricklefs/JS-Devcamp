// Function using JS to convert a given numver into an array of digits. //

//1st Solution//

const numToArray = (number) => {
  let array = number.toString().split("");
  	return array.map(i => parseInt(i));
}

console.log(numToArray(123456));
console.log(numToArray(5432));

//2nd Solution//
function numberToArray(num) {
  return [...`${num}`].map(i => parseInt(i))
}
console.log(numberToArray(12345))