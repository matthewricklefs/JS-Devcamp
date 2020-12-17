// First Solution
function removeByIndex(arr, specifiedIndec) {
  const removed = []
  
  specifiedIndex.forEach( idx => {
    removed.push(arr[idx])
  })
  
  return removed 
}

console.log(removeByIndex(['a', 'b', 'c', 'd', 'e', 'f', 'f', 'e', 'f'], [1, 5]))

//Second Solution
// Write a program to extract out the values at specified indeces from an array.
// removeByIndex(['a','b','c','d','f','f','e','f'], [1, 5]) => ['b', 'f']
function removeByIndex(arr, specifiedIndex){
  // const removed = []
  // specifiedIndex.forEach(idx => {
  //   removed.push(arr[idx])
  // })
  // return removed
  return specifiedIndex.map(idx => arr[idx])
}
console.log(removeByIndex(['a','b','c','d','f','f','e','f'], [1, 5]))