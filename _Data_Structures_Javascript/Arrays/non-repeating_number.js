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




//Solution #2: Using a JavaScript object to keep count of repetitions

function findFirstUnique(arr) {
	var counts = {}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] in counts) {

			counts[arr[i]]++;

		} else {
			counts[arr[i]] = 1;
		}
	}

	for (var i = 0; i < arr.length; i++) {
		if (counts[arr[i]] == 1)
			return arr[i];
	}

	return null;
}



// Runtime Complexity
// O(n)

// Memory Complexity
// O(n)