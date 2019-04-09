//Find Second Maximum Value in an Array

function findSecondMaximum(arr){
    arr.sort(function(a, b) {
          return a - b
      })
    if(arr.length >= 2)
      return arr[arr.length-2]
    else
      return null
  }