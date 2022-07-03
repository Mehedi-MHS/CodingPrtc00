/*Nested Destructuring01(jsNotesForProfessionals-333 page)*/
//ARRAYS WITHIN OBJECTS

var object = {
  a: 1,
  b: [2, 3],
};

var {
  a: x1,
  b: [x2, x3],
} = object;
console.log(x1 + " " + x2 + " " + x3);
//1 2 3
//OBJECTS WITHIN ARRAYS
var arr = [1, 2, { a: 3 }, 4];
var [y1, y2, { a: y3 }, y4] = arr;
console.log(y1, y2, y3, y4);
//1 2 3 4
