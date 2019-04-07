// Remove Even Integers from an Array
// Given an array of size n, remove all even integers from it. Implement this solution in JavaScript and see if it runs without an error.


//Solution 1
//my solution i.e best solution

let removeEven = (arr)=>{
    let readIndex = 0;
    let writeIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if((arr[readIndex] % 2) !== 0){
            arr[writeIndex] = arr[readIndex];
            writeIndex++;
        }
        readIndex++
    }
    
    return arr.splice(0,writeIndex);
}
// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)




//Solution 2

function removeEven(arr) {
    var odds = []
    for (let number of arr) {
        if (number % 2 != 0) // Check if the item in the list is NOT even ('%' is the modulus symbol!)
            odds.push(number) //If it isn't even append it to the empty list
    }
  return odds // Return the new list
}
console.log(removeEven([3, 2, 41, 3, 34]))

// Runtime Complexity
// O(n)

// Memory Complexity
// O(n)



//Solution 3
//use the filter method
function removeEven(arr) {
    return arr.filter((v => (v % 2) != 0))
}

// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)

