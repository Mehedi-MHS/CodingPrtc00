/* Nested destructuring00(JavascriptNotesForProfessionals-332 page) */
//we are not limited to destructure an array/object, we can destructure a nested object/array

/* NESTED OBJECT DESTRUCTURING*/
var obj = {
  a: {
    c: 1,
    d: 3,
  },
  b: 2,
};

var {
  a: { c: x, d: y },
  b: z,
} = obj;

console.log(x + " " + y + " " + z);
//1 3 2

/* NESTED ARRAY DESTRUCTURING*/
var arr = [1, 2, [3, 4], 5];
var [a, , [b, c], d] = arr;
console.log(a + " " + b + " " + c + " " + d);
//1 3 4 5
