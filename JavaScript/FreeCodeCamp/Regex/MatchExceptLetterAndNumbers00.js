// Match everything but letter and numbers using Capital '\W'
// \W is similar to [^A-Za-z0-9_]
let shortcut = /\W/;
let numbers = "42%";
let strings = "Coding!";

console.log(numbers.match(shortcut));
console.log(strings.match(shortcut));
/*
 [ '%', index: 2, input: '42%', groups: undefined ]
[ '!', index: 6, input: 'Coding!', groups: undefined ]
*/
