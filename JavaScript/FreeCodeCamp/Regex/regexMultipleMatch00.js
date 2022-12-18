//use 'g' global keyword to match all the occurances

let str = "twinkle Twinkle little star,another twinkle";
let regex = /twinkle/gi; //global case insensitive

let result = str.match(regex);
console.log(result);
//[ 'twinkle', 'Twinkle', 'twinkle' ]
//
//
