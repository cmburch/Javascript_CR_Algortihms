function findMinimum(arr) {
    var currentMin = arr[0];
    //At every Index compare its value with current minimum 
    //and if its less, then make that index value the new minimum value
    for (let val of arr) {
        if (val < currentMin)
            currentMin = val
    }

    return currentMin

}

// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)