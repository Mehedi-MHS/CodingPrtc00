//General replace method: string.replace(regex,newString)
let wrongString = "The sky is silver";
let regex1 = /silver/;
console.log(wrongString.replace(regex1, "blue"));
//The sky is blue

//===== Capture group method =========//
//You can also access capture groups in the replacement string with dollar signs ($).
//Capture group example 1:
//--------------------------
let string2 = "Lorem Ipsum";
let regex2 = /(\w+)\s(\w+)/; //matches 2 word and whitespace (space between 2 words)
let replaceText = "$2 $1";
console.log(string2.replace(regex2, replaceText)); //$1=Lorem,$2=Ipsum
//Ipsum Lorem

//Capture group example 2:
//-------------------------

console.log("one two three".replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1"));
//three two one
