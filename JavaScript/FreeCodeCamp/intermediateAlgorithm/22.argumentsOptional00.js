/*
Arguments Optional:
==================

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Tests:
======
addTogether(2, 3) should return 5.
addTogether(23, 30) should return 53.
addTogether(5)(7) should return 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
addTogether("2", 3) should return undefined.
addTogether(5, undefined) should return undefined.
*/

function addTogether(num1, num2) {
  switch (arguments.length) {
    case 2:
      if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
      } else {
        return undefined;
      }
    case 1:
      if (typeof arguments[0] !== "number") {
        return undefined;
      } else {
        return function (num3) {
          if (typeof num3 == "number") {
            return num1 + num3;
          } else {
            return undefined;
          }
        };
      }
    default:
      return undefined;
  }
}

console.log(addTogether(3, 2));
//5

console.log(addTogether(23, 30));
//53
console.log(addTogether(5)(7));
//12
console.log(addTogether("https://www.youtube.com/watch?v=sjkdduzhxxuhdi"));
//undefined
console.log(addTogether(2, "3"));
//undefined
console.log(addTogether(5, undefined));
//undefined
console.log(addTogether(2)([3]));
//undefined
