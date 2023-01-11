/*
Steamroller:
=============

Flatten a nested array. You must account for varying levels of nesting.

Tests:
-------
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used. 
*/
//2 most effective ways of flattening multidimensional arrays are
//using recursion and using reduce() method

//Flatten using recursion

function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten
    );
  }, []);
}

console.log(steamrollArray([[["a"]], [["b"]]]));
//['a','b']
console.log(steamrollArray([1, [2], [3, [[4]]]]));
//[ 1, 2, 3, 4 ]
console.log(steamrollArray([1, [], [3, [[4]]]]));
//[1,2,3,4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));
//[ 1, {}, 3, 4 ]
