//Solution #1: Brute Force

function findFirstUnique(arr){
    var index2;
      for(var index1=0;index1<arr.length;index1++){ 
          index2 = 0
          while(index2 < arr.length){
              if ((index1 != index2 )&& (arr[index1] == arr[index2])) 
                  break
              index2 += 1
      }
          if (index2 == arr.length) 
              return arr[index1] 
     
    }
      return null;
  }

// Runtime Complexity
// O(n^2)

// Memory Complexity
// O(1)