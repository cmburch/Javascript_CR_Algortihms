let find_palindromes_in_sub_string = function(input, j, k) {
  let count = 0;
  //range of the string
  while (j >= 0 && k < input.length) {
    //stop when j is negative and k is greater than string length
    if (input[j] != input[k]) {
      break;
    }
    console.log(input.substring(j, k + 1));
    count++;
    j--;
    k++;
  }
  return count;
};

let find_all_palindrome_substrings2 = function(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    //find odd length palindromes
    count += find_palindromes_in_sub_string(input, i - 1, i + 1);
    //find even length palindromes
    count += find_palindromes_in_sub_string(input, i, i + 1);
  }
  return count;
};