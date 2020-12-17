
let arr = ['ughhh', 'goood', 'another good one', 'uggg']

//First Solution
// const arrayPopper = () => {
//     arr.shift()
//     arr.pop()
//     return arr
// }

// console.log(arrayPopper);


//Second Solution
const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw "You need at least three elements in the array.";
    } 
}

removeFirstAndLast(arr)
