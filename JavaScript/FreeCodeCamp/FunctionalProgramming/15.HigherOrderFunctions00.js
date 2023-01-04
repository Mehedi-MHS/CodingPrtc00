/*
 Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
 =============================================================================

Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

Tests:
========
squareList should be a function.
for, while, and forEach should not be used.
map, filter, or reduce should be used.
The function should return an array.
squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].
 */

//Only choose numbers that are positive integers(negative number and decimal is not allowed)

let squareList = (arr) => {
  let positiveIntegerArr = arr.filter(
    (num) => num > 0 && Math.floor(num) === num
  );
  /* let num=3.5; Math.floor(num) ; //3
   * so, num(decimal) is not equal to its floor  number,
   *But if num is integer,(eg:num=3),then this condition is true
   * I invented this method to check if a number is integer or not
   */
  let squareArr = positiveIntegerArr.map((num) => num * num);
  return { given: arr, positiveInteger: positiveIntegerArr, square: squareArr };
};

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
/*
 {
  given: [
       4, 5.6, -9.8,
    3.14,  42,    6,
    8.34,  -2
  ],
  positiveInteger: [ 4, 42, 6 ],
  square: [ 16, 1764, 36 ]
}
 */

console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
/*
{
  given: [
    -3.7,   -5,   3,
      10, 12.5,   7,
    -4.5,  -17, 0.3
  ],
  positiveInteger: [ 3, 10, 7 ],
  square: [ 9, 100, 49 ]
} */
