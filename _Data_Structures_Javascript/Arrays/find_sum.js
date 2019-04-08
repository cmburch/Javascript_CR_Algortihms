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
