//You can search the end of strings using the dollar sign character $ at the end of the regex.
let str = "This is the end of the story";
let regex = /story$/;
console.log(regex.test(str));
//true

let str2 = "This story will never end";
console.log(regex.test(str2));
//false
