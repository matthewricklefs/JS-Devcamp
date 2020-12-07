// My First Approach //
function average(array) {
  var sum = 0;
  for(var i = 0; i < array.length;i++){
      sum += array[i];
  }
  return sum / array.length;
}

console.log(average([1, 2, 3]))

// My Teacher's Solution //

const getAverage = arr => {
  // sum the values from the array
  const reducer = (total, currentValue) => total + currentValue;
  const sum = arr.reduce(reducer);
  return sum;

  // get the length of the array
  // divide the array sum by the length
  return sum / arr.length;
}

getAverage([1,2,3]);

//total: 0
//currentValue: 1
// 1

// total : 1
//currentValue: 2
// 3

//total: 3
//currentValue : 3
//6

//Instead of staring at the screen and getting nowhere, create a Mental Framework by writing out each step in the process