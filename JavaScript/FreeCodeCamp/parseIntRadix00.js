//parseInt(string,radix)
//parseInt function takes a string and returns an integer
//it takes a second argument for radix , which specifies
//the base of the number of the string. The radix can be an integer between 2-36

const a = parseInt("11", 2);
//Here the 2 specifies that the string '11' is in binary form and parseInt() function converts the binary
//number 11 to decimal integer
console.log(a);
//3
