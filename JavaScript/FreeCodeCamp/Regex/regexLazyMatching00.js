//Find characters with lazy matching
//greedy matching: returns longest possible parts of string that matches thr regex
let str = "titanic";
let regex = /t[a-z]*i/;
console.log(str.match(regex));
//[ 'titani', index: 0, input: 'titanic
//', groups: undefined ]

//Lazy matching: returns smallest possible part of string that matches regex pattern
// use '?' sign for this
console.log("titanic".match(/t[a-z]*?i/));
//[ 'ti', index: 0, input: 'titanic', groups: undefined ]

/*Regular expressions are by default greedy*/

//greedy matching
console.log("<h1>Hello world</h1>".match(/<.*>/));
/*
 [
  '<h1>Hello world</h1>',
  index: 0,
  input: '<h1>Hello world</h1>',
  groups: undefined
]
*/

//Lazy matching
console.log("<h1>Hello world </h1>".match(/<.*?>/));
/*
 [ '<h1>', index: 0, input: '<h1>Hello
 world </h1>', groups: undefined ]
 */
