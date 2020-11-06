// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));


  // 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. 
  //Again, the Math.max method is not allowed.
 
const maxOfThree = (x, y, z) => x * y * z;
console.log(maxOfThree(7, 3, 9))

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char){
char.match(/[aeiou]/gi); {
  return true;
}
return false
}
console.log(isCharAVowel('a'))

// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. 
//For example, `sumArray([2, 4, 5]);` would return `11`.

const sumArray = (a, b, c) => a + b + c;
console.log(sumArray(5, 6, 7))

// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. 
//For example, `multiplyArray([2, 4, 5]);` would return `40`.

function multiplyArray([d, e, f]){
 return d * e * f;
}
console.log(multiplyArray([2, 3, 7]))

// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
const numArgs = function(...args){
return arguments.length;
}
console.log(numArgs(22, 7, 8))

// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. 
//For example, `reverseString('rockstar');` would return the string "ratskcor".
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Taco"));

// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

function longestStringInArray(str) {
  let strSplit = str.split(' ');
  let longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(longestStringInArray("The quick brown fox jumped over the lazy dog"));

// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; 
//and returns an array of the strings that are longer than the number passed in. 
//For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

function stringsLongerThan(arr, len) {
  return arr.filter(function(s) {
  return (s.length > len);
  })
};
console.log(stringsLongerThan(['woo', 'this', 'is', 'challenging!'], 3));