//In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let str = "Apple is first and can be found now.";
let regex = /^Apple/;
console.log(regex.test(str));
//true

let str2 = "I like Apple very much";
console.log(regex.test(str2));
//false
