function mergeSort(arr) {
  if (arr.length === 1) return arr
  
  const half = Math.floor(arr.length/2)
  const letfArray = arr.slice(0, half) 
  const rigthArray = arr.slice(half)

  return merge(mergeSort(letfArray), mergeSort(rigthArray))
}

function merge (leftArr, rightArr){
  const sortedArr = []
  while(leftArr.length > 0 && rightArr.length > 0){
    if (leftArr[0] < rightArr[0]){
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}
console.log(mergeSort([-20, 4, 8 , 1, 4, 7, 14]))

