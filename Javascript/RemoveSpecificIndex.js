function removeByIndex(arr, specifiedIndec) {
  const removed = []
  
  specifiedIndex.forEach( idx => {
    removed.push(arr[idx])
  })
  
  return removed 
}

console.log(removeByIndex(['a', 'b', 'c', 'd', 'e', 'f', 'f', 'e', 'f'], [1, 5]))