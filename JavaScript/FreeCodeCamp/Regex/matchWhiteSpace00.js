//WhiteSpace - Space between 2 letters
//use \s (small 's') to match WhiteSpace
// \s also matches tab,formfeed,newLine etc. characters.
// \s = [ \f\t\n\v]

let str = "WhiteSpace WhiteSpace WhiteSpace!";
let regex = /\s/g;
console.log(str.match(regex));

//[ ' ', ' ' ]
