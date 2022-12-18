const arr = [1, 2, 3, 4, 5];

const [a1, b1] = arr; //gets only first 2.elements pf array
console.log(a1, b1);
//1 2

//To reach at desired index,use comma
const [a2, , , b2] = arr;
console.log(a2, b2);
//1 4

//destructure using spread operator
//it does same as Array.prototype.slice()
const [a3, b3, ...c3] = arr;
console.log(a3, b3, c3);
//1 2 [ 3, 4, 5 ]
