/*
 
Sort an Array Alphabetically using the sort Method:
=====================================================
The sort method sorts the elements of an array according to the callback function.

For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
Therefore, it is encouraged to provide a callback function to specify how to sort the array items. 
When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction:
---------------important-----------
If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b.
If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a.
If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
-----------------------------------

*/

function ascendingOrder(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(ascendingOrder([1, 3, 5, 2, 4]));
//[ 1, 2, 3, 4, 5 ]

function descendingOrder(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(descendingOrder([1, 3, 5, 2, 4]));
//[5,4,3,2,1]

function donotChangeOrder(arr) {
  return arr.sort((a, b) => a == b);
}
console.log(donotChangeOrder([1, 3, 5, 2, 4]));
//[1,3,5,2,4]
