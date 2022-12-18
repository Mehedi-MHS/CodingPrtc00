/*
 You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
 */

let american = "color";
let british = "colour";
let regex = /colou?r/;
//preceding element of '?' is 'u',so,pattern will match if 'u' exists 0 or more time
console.log(regex.test(american));
console.log(regex.test(british));
//true
//true
