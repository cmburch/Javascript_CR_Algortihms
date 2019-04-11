//Reverse a string 

//this a helper method
let replaceAt = function(string, index, character){
    return string.substr(0, index) + character + string.substr(index+character.length);
};
  
  
let str_rev = function(str, start, end) {
    if (!str || str.length < 2) {
      return;
    }
    while (start < end) {
      let temp = str[start];
      str = replaceAt(str, start, str[end]);
      str = replaceAt(str, end, temp);
  
      start++;
      end--;
    }
    return str;
  };