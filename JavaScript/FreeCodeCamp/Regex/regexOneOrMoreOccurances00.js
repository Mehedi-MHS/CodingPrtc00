//Match one or more occurances of character using the '+' sign
//"Mississippi".match(/s+/g); will match ["ss","ss"]
//"ababcd".match(/a+/g); will match ["a","a"]; because there is a 'b'
//in the middle of both 'a' characters

let str = "I miss you so much,blesss";
let regex = /s+/gi;
let result = str.match(regex);
console.log(result);
//[ 'ss', 's', 'sss' ]
