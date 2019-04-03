// Find Low/High index
// Given a sorted array of integers, return the low and high index of the given key. 
// Return -1 if not found. The array length can be in the millions with many duplicates.

let find_low_index = (arr, key)=> {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
  
    while (low <= high) {
     //middle : low||high||equal 3 options
      let mid_elem = arr[mid];
  
      if (mid_elem < key) {
        low = mid + 1;
      } else {//middle is high || equal the key
        high = mid - 1;
      }
  
      mid = low + Math.floor((high - low) / 2);
    }
    
    if (arr[low] === key) {
      return low;
    }
  
    return -1;
  };

