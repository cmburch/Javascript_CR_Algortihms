// Find the Smallest Common Number
// Given three integer arrays sorted in ascending order, 
// have to find the smallest number that is common in all three arrays

let find_least_common_number = (a,b,c)=>{
    let i = 0;
    let j = 0;
    let k = 0;
    
    while (i < a.length
        && j < b.length 
        && k < c.length) {
        
        // Finding the smallest common number
        if (a[i] === b[j] &&
            b[j] === c[k]) {
            return a[i];
        }

        if (a[i] <= b[j]
            && a[i] <= c[k]) {
           i++;
         } else if (b[j] <= a[i]
            && b[j] <= c[k]) {
           j++;
         } else if (c[k] <= a[i]
            && c[k] <= b[j]) {
           k++;
         }
    }
    return -1;
}




// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)