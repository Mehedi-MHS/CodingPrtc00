// use wildcard '.' to match anything
// eg: for matching fun,num,mun,nun etc, use /.un/
let str = "I am at as an or what?";
let regex = /a./gi;
let result = str.match(regex);
console.log(result);
//[ 'am', 'at', 'as', 'an', 'at' ]
