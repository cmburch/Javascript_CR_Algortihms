// Reverse Words in a Sentence
// Given a sentence, reverse the order of words.

//In JavaScript, strings are immutable https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
//index is the character that is getting replaced
//the index is excluded and replaced with the character
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
  
  let reverse_words = function(sentence) {
  
    //  Here sentence is a null-terminated string ending with char '\0'.
    if (!sentence || sentence.length === 0) {
      return;
    }
  
    //   To reverse all words in the string, we will first reverse
    //   the string. Now all the words are in the desired location, but
    //   in reverse order: "Hello World" -> "dlroW olleH".
  
    let str_len = sentence.length;
    sentence = str_rev(sentence, 0, str_len - 1);
  
    //  Now, let's iterate the sentence and reverse each word in place.
    //  "dlroW olleH" -> "World Hello"
  
    let start = 0;
    let end = 0;
    while (true) {
      //  find the  start index of a word while skipping spaces.
      // === triple equals means to skip
      //stops when start is point to null which is the end  i.e ' ' === null  this is false
      while (sentence[start] === ' ') {
        start++;
      }
      //when the end is reached start = end and start is value null
      //this means has reached the end and breaks out of loop;
      //this is the base case for the leading point *start* and will stop loop when end is reached
      if (start >= sentence.length) {
        break;
      }
  
      //  find the end index of the word.
      end = start + 1;
      while (end < sentence.length && sentence[end] != ' ') {
        end++;
      }
  
      //  let's reverse the word in-place.
      sentence = str_rev(sentence, start, end - 1);
  
      start = end;
    }
    return sentence;
  };
  
  