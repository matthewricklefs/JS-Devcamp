// Write a JavaScript program to filter out the specified values from an array. Return the original array without the filtered values.
// removeByValue(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c') => ['b', 'b']


function removeByValue(arr, ...valuesToRemove){
  const pulled = arr.filter(value => {
    return !valuesToRemove.includes(value)
  })
  arr.length = 0
  pulled.forEach(value => arr.push(value))
  return arr
}
console.log(removeByValue(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c'))
console.log(removeByValue(['a', 'b', 'c', 'a', 'b', 'c'], 'c'))