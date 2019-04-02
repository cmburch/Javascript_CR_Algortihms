//Description
//Given a sorted array of integers, return the index of the given key.
// Return -1 if not found.

let binarySearch = (arr,key)=>{
    if(arr.length < 0) return;

    let low = 0;
    let middle;
    let high = arr.length - 1;

    while(low <= high){
        middle = low + Math.floor((high - low)/2);
        if(arr[middle] === key){
            return middle;
        }
        else if (arr[middle] > key) {
            high = middle - 1;
        }
        else{
            low = middle + 1;
        }    
    }
    return -1;
}


// Runtime Complexity
// O(logn)

// Memory Complexity
// O(1)