//character class [characters] is used to match a character with
//multiple posibilities
//eg: To match 'big','bag','bug'
//use /b[aiu]g/ regex

let str = "I have a big bag,that has a code with bug";
let regex = /b[aiu]g/gi;
let result = str.match(regex);
console.log(result);
//[ 'big', 'bag', 'bug' ]
