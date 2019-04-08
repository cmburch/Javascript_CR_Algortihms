// Find Two Numbers that Add up to "n"
// Given an array and a number `n`, find two numbers from the array that sum to `n`.


//Solution #1: Brute Force
//this is the worst case
function findSum(arr, value) {
    for (let j of arr) {
        for (let k of arr) {
            if ((j + k) == value)
                return [j, k]
        }
    }
    return false;
}
console.log(findSum([1, 2, 3, 4], 5))
console.log(findSum([1, 2, 3, 4], 10))

// Runtime Complexity
// O(n^2)

// Memory Complexity
// O(1)




//Solution #2: Moving indices
function findSum(arr, value) {

    arr.sort(function(a, b) {
        return a - b
    })

    var index1 = 0,
        index2 = arr.length - 1,
        result = [],
        sum = 0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2]

        if (sum < value) {
            index1++;
        } else if (sum > value) {
            index2--;
        } else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;

        }
    }
  return false;
}


//Solution #3: Using a Set
//this is the best solution compared to the other ways

let findSum = (arr,value)=>{
    let found_values = new Set();
    let result = [];
    for (let i in arr) {
        if (found_values.has(value - arr[i])) {
           results.push(arr[i]);
           results.push(value-arr[i]);
           return results;
         
        }
    
        found_values.add(arr[i]);
      }
    
      return false;

}
