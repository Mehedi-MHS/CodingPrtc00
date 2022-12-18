//to find mixed group of characters,use () parentheses

let str = "It is pumkin like penguin";
let regex = /p(umk|engu)in/g;
console.log(str.match(regex));
//[ 'pumkin', 'penguin' ]
