function isPalindrome(word) {
  // Write your algorithm here
  let getWord = word.split('');
  const reverseGetWord = getWord.reverse();
  const reversedWord = reverseGetWord.join('');
  if(word === reversedWord){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
  start
  enter a word 
  if it is "robot" return false 
  if it is "mom" or "racecar" return true
  end
*/ 

/*
  Add written explanation of your solution here
this function should return true if the string is a palindrome 
(that is, if it reads the same forwards and backwards, like "mom" or "racecar"),
and return false if it is not a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
