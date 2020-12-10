// Manual Exponent Function in JS //
// const toThePowerOf = (num, exp) => {
//   const items = Array(exp).fill(num);
//   const reducer = (total, currentValue) => total * currentValue;
//   return items.reduce(reducer);
// }

// console.log(toThePowerOf(2,3));
// Array(3).fill(2);//? [2, 2, 2]

// // Repeat Method Approach //
 
// const manualExponentReduce = (num, exp) => {
//   const baseArr = num.toString().repeat(exp).split(' ')
//   const reducer = (total, iter) => total * iter

//   return baseArr.reduce(reducer)
  
//   console.log(baseArr)
// }

// console.log("2" * 5)

// Loop Method //
const manuelExponentWhile = (base, exp) => {
  let counter = exp - 1
  let total = base

  while(counter > 0) {
    total *= base
    counter--
  }

  return total
}

console.log(manuelExponentWhile(2, 3))

//For Loop //

const manualExponentFor = (base, exp) => {
  let total = base

  for (let i = exp - 1; i > 0; i--) {
    total *= base
  }

  return total
}