//The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_)

let longhand = /[A-Za-z0-9_]+/;
let shorthand = /\w+/;
let numbers = 42;
let varNames = "var_Names";

console.log(longhand.test(numbers));
console.log(longhand.test(varNames));
console.log(shorthand.test(numbers));
console.log(shorthand.test(varNames));

//true
//true
//true
//true
