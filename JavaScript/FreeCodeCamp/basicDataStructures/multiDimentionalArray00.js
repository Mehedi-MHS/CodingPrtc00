//Arrays can be infinite dimentional
//bracket notation is used to access the multidimentional array values

let nested = [["deep"], [["deeper"]], [[["deepest"]]], [[[["deeepe-st"]]]]];

console.log(nested[3][0][0][0][0]);
//deeepe-st

//As we know it's index number,we can change it's value
nested[3][0][0][0][0] = "More deepest";
console.log(nested[3][0][0][0][0]);
//More deepest
