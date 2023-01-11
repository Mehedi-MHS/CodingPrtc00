//convert number to specific base
//number.toString(base)
// eg: number.toString(2)
//
// another is convert any number system to decimal
// parseInt(value,which_numberSystem_the_value_is_given)
// eg: parseInt("110",2) converts binary '110' to decimal 6

let binary = "110";
let decimal = parseInt(binary, 2);

console.log(decimal);

//using toSttng method
let dec = 6;
console.log(dec.toString(2));
//110
