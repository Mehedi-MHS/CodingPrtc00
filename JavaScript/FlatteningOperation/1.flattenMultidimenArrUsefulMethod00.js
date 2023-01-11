//2 most effective ways of flattening multidimensional arrays are
//using recursion and using reduce() method

//Flatten using recursion

function flattenArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flattenArray([[["a"]], [["b"]]]));
//['a','b']
console.log(flattenArray([1, [2], [3, [[4]]]]));
//[ 1, 2, 3, 4 ]
console.log(flattenArray([1, [], [3, [[4]]]]));
//[1,2,3,4]
console.log(flattenArray([1, {}, [3, [[4]]]]));
//[ 1, {}, 3, 4 ]
