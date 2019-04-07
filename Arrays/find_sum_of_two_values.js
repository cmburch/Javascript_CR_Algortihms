// find_sum_of_two function return true if
// there are two values in array who
// sum to value and returns false otherwise
let find_sum_of_two = function(A, val) {
    let found_values = new Set();
    for (let a in A) {
      if (found_values.has(val - A[a])) {
        return true;
      }
  
      found_values.add(A[a]);
    }
  
    return false;
  };