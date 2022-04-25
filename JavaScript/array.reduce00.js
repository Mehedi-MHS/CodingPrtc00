/*array.reduce()->works from left to right
 * array.reduceRight()->works from right to left
 *
 *The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to
  reduce it to a single value.
 *array.reduce(runningTotal,currentValue)
 */

//example:1
console.log(
  [2, 3, 4].reduce(function (a, b) {
    return a + b;
  })
); //9

//example:2
[2, 3, 4].reduce((a, b) => {
  console.log(a + b);
});
/*
 5
NaN
*/

//example:3
//Optional second parameter can be passed to reduce(). Its value will be used as the first argument (specified as a)
//for the first call to the callback (specified as function(a, b)).

console.log(
  [2].reduce(function (a, b) {
    return a + b;
  }, 3)
); //5

//example:04
function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}
let a = [2, 3, 4];
let sum = a.reduce(add);
console.log(sum); //9

//example:5(string concatenation using reduce)
function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var word = [
  "A ",
  "quick ",
  "brown ",
  "fox ",
  "jumps ",
  "over ",
  "the ",
  "lazy ",
  "dog",
];
var sentence = word.reduce(concat);
console.log(sentence);
//A quick brown fox jumps over the lazy dog
