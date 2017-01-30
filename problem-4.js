// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

//SOLUTION

testFunction = function(){

  let palindromes = [];
  for (let i = 999; i > 99; i--) {
    for (let j = i; j > 99; j--) {
      let number = i * j;
      if (isPalindrome(number)) {
        palindromes.push(number);
      }
    }
  }
  return Math.max(...palindromes);

}

isPalindrome = function(number){
    return number.toString() == number.toString().split("").reverse().join("");
}

console.log(testFunction());
