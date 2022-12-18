//Remove Whitespace from start and end of string
//String.prototype.trim() does the same thing,but we have to do this using
//regular expressions
let str1 = "   Hello, World!   ";
let regex2 = /[^\s*].*[^\s*$]/; //  \s is Whitespace
//Not [^] starts [^] with any occurances '*' of whitespace [^\s*], then matches anything '.'any occurances '*'
//Then not ends [^ $] with any occurances of whitespace [^\s*$]
let result1 = str1.match(regex2)[0];
//or console.log(result1[0])
console.log(result1);
//Hello, World!

//example:2 (used 'a' instead of whitespace)
// Used bracket () 3 times to make the string 3 capture group
let str = "aHello, World!a";
let beginningAndEndWhitespace = /^(a)(.*)(a)$/;
console.log(str.match(beginningAndEndWhitespace));
/*
 [
  'aHello, World!a',
  'a',
  'Hello, World!',
  'a',
  index: 0,
  input: 'aHello, World!a',
  groups: undefined
]
*/
console.log(str.replace(beginningAndEndWhitespace, "$2"));
//Hello, World

/*Explaination: Here,$1='a',$2='Hello, World!',$3='a'
 * Then,replace the whole string with $2,that means replace the whole string with
 * 'Hello, World!'
 * */
