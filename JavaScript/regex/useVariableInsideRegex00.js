//Answer from stackoverflow
//To use variable inside regex,you have to use RegExp(regex,flag)  constructor

let str = "Hello";
let word = "h";
let regex = new RegExp(word, "i");
console.log(regex.test(str));
//true
