// OR operator (|) is used to match multiple strings at the same time

let str = "I have a book,which has mango tree drawn";
let regex = /book|mango|tree/;
console.log(regex.test(str));
//true
