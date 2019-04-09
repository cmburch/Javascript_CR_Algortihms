// Fibonacci Numbers
// Find the nth Fibonacci number.

//Solution #1 worst

let get_fibonacci_rec = function(n) {

    if (n === 0 || n === 1) {
      return n;
    }
  
    return get_fibonacci_rec(n - 1) + get_fibonacci_rec(n - 2);
  };
  
// Runtime Complexity
// O(2n) i.e exponential

// Memory Complexity
// O(n)
