// \S ( capital S ) matches evetything except whitespace,newline,tab,formfeed etc. characters
// \S is same as [^ \r\f\t\n\v]

let str = "WhiteSpace , Whitespace everywhere!";
let regex = /\S/g;
console.log(str.match(regex));
/*
 [
  'W', 'h', 'i', 't', 'e', 'S',
  'p', 'a', 'c', 'e', ',', 'W',
  'h', 'i', 't', 'e', 's', 'p',
  'a', 'c', 'e', 'e', 'v', 'e',
  'r', 'y', 'w', 'h', 'e', 'r',
  'e', '!'
]
*/
