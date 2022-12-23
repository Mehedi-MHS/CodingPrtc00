//It is the easier method than copyArrUsingSliceAngSplice00.js
//todo: copy array1 into array2 at the given index
function frankenSplice(arr1, arr2, index) {
  arr2.splice(index, 0, ...arr1);
  return console.log(arr2);
}

frankenSplice([1, 2, 3], ["a", "b", "c"], 1);
//[ 'a', 1, 2, 3, 'b', 'c' ]

frankenSplice(["cherry", "Dates"], ["apple", "banana", "eggplant"], 2);
//[ 'apple', 'banana', 'cherry', 'Dates', 'eggplant' ]
