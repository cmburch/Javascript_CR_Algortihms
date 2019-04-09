// Fibonacci Numbers
// find the nth Fibonacci number.

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





//Solution #2   this is the best solution

let get_fibonacci = function(n) {
    //this covers the case of fib(0) && fib(1)
      if (n === 0 || n === 1) {
        return n;
      }
      //this pattern is very common look at array stock price example
      let n_1 = 1;
      let n_2 = 0;
      let res = 0;
    
      let i = 2; //this is the start point
      while (i <= n) {
        res = n_1 + n_2;
        n_2 = n_1;
        n_1 = res;
        i++;
      }
    
      return res;
};


//test
console.log("Fibonacci at 5th is ---> " + get_fibonacci(5));
console.log("Fibonacci at 9th is ---> " + get_fibonacci(9));

// Runtime Complexity
// O(n)

// Memory Complexity
// O(1)