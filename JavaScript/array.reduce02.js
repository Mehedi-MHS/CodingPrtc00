//example:1->Getting Min,Max values

//Min value
var arr = [-5, 20, 3, -10, 7];

var min = arr.reduce(function (a, b) {
  return a < b ? a : b;
}, Infinity);

//var max = arr.reduce(function (a, b) {
//  return a > b ? a : b;
//}, Infinity);
//Max value not working. showing Infinity

console.log("Array:" + arr + "\nMin:" + min);
//Min:-10

//example:2
/*Find unique values.
 *Here is an example that uses reduce to return the unique numbers to an array. An empty array is passed as the
 *second argument and is referenced by prev.
 *Here prev is the empty array
 */

var arr2 = [1, 1, 2, 3, 4, 2, 5, 5];
var unique = arr2.reduce(function (prev, num) {
  if (prev.indexOf(num) === -1) {
    prev.push(num);
  }
  return prev;
}, []);
console.log(unique);
//[ 1, 2, 3, 4, 5 ]
