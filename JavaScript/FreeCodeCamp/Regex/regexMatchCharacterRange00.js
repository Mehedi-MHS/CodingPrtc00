//use highpen '-' to match a range of characters instead of typing them
//individually
//eg:  [a-e] matches character from a to e.
//  [a-z] for matching all the alphabets in lowerCase,if use 'i' flag then will case insensitive
//  [A-Z] for only UpperCase
//  [a-zA-Z] for case insensitive without 'i' flag
//  [0-9] for all the numbers

let str = "I have a big bag full of bug";
let regex = /b[a-u]g/gi; //g for multiple match
let result = str.match(regex);
console.log(result);
//[ 'big', 'bag', 'bug' ]

const str2 = " I have 10 pen and 15 apple";
let regex2 = /[0-5]/gi; //match single numbers
let result2 = str2.match(regex2);
console.log(result2);
//[ '1', '0', '1', '5' ]
