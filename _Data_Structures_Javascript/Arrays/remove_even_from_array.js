// Remove Even Integers from an Array
// Given an array of size n, remove all even integers from it. Implement this solution in JavaScript and see if it runs without an error.


//Solution 1
//my solution

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
