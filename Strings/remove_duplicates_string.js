let replaceAt = function(string, index, character) {
    return string.substr(0, index) + character + string.substr(index + character.length);
  }
  
  let remove_duplicates_2 = function(str) {
    let write_index = 0;
  
    for (let i = 0; i < str.length; i++) {
      let found = false;
  
      for (let j = 0; j < write_index; j++) {
        if (str[i] === str[j]) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        str = replaceAt(str, write_index, str[i]);
        write_index++;
      }
    }
    return str.substr(0, write_index);
  };