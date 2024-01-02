// SOLUTION 2 BELOW
//1. WRITE THE PROBLEM IN YOUR OWN WORDS
  // make a funciton if the word is a palindrome. 
  // if the first letter is the same as the last letter and the second letters is the same as 2nd to last letter ad so on until we hit the middle, 
  // that means we should return true 
// 2. TEST CASES
  // abba
//   ^  ^ true
//  abba 
//   ^^ true
// bee 
// ^ ^ false 
//3. MAKE PSEUDOCODE 
  // iterate from the beginning to the middle of the word
  //  check each character to the coresponding letter from the end 
  //    if any of the letters do not match, return false 

  //    return true 

function isPalindrome(word){
   // iterate from the beginning to the middle of the word
   // racecar 7 / 2 = 3.5 
   // aaaaaa 6 / 2 = 3
  for (let i = 0; i < word.length / 2; i++){
    //  check each character to the coresponding letter from the end 
    const j = word.length - 1 - i 
    const startCharacter = word[i]
    const endCharacter = word[j]
    //    if any of the letters do not match, return false 
    if (startCharacter !== endCharacter) return false 
  }

  //    return true 
return true
}


// SOLUTION 1 BELOW:
function reverse(word) {
  // "abc" => "cba"
  // const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  // return reversedWord
  return word.split("").reverse().join("")
  // ^^ line above is a way to optimize but you can do it the long way further up if you prefer
}
function isPalindrome(word) {
  // Write your algorithm here
  //reverse the string input
  const reversedWord = reverse(word)
  //if the input is the same as the reversed input
  // the function below will work fine. we used this format at first because it was the way we wrote the problem and solution but there is a better way to write this and we will optimize

  return word === reversedWord
}
//   if (word === reversedWord) {
//     return true 
//   } else {
//     return false 
//   }
// }
// make a function that has one argument. the argument should be a string
// a palindrome is a word that reads the same forward and backward ex: mom, dad
// when your function runs, and if the string argument is a palindrome, then you'll get "true" as a response
// but if the string argument is not a palindrome, it will come back as "false"
// inputs: strings
// outputs: true or false

/* 
  Add your pseudocode here

  reverse the input string
  
  if the string is the same as the input string 
    return true 

    else 
      return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
