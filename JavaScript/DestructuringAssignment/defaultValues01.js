//Default value while destructuring - jsNotesforProfessionals 334 page

//we often encounter a situation where a property we are trying to extract doesnot
//exist in the object/array , resulting in a TypeError (while destructuring nested objects)
//or being set to undefined. While destructuring we can set a default value , which it will fallback to ,in case
//of it not being found in the object

var obj = { a: 1 };
var { a: x1, b: x2 = 10 } = obj;
console.log(x1, x2); //1 10

var arr = [];
var [a = 5, b = 6, c] = arr;
console.log(a, b, c); // 5 6 undefined
