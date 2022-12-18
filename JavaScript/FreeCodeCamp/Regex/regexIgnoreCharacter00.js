// Use '^' caret character to ignore specified character match,these are called negated character
// [^aeiou] will match all the characters (including number,symbol) without vowels
//example to match all the characters except vowels and numbers
let str = "I killed 3 mice";
let regex = /[^aeiou0-9]/gi;
let result = str.match(regex);
console.log(result);
//[
// ' ', 'k', 'l',
//  'l', 'd', ' ',
//  ' ', 'm', 'c'
//]
