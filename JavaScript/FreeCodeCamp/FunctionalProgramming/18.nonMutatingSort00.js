/*
A side effect of the sort method is that it changes the order of the elements in the original array.
In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.
*/

/*
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

Tests:
=====
Your code should use the sort method.
The globalArray variable should not change.
nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
nonMutatingSort(globalArray) should not be hard coded.
The function should return a new array, not the array passed to it.
nonMutatingSort([1, 30, 4, 21, 100000]) should return [1, 4, 21, 30, 100000].
nonMutatingSort([140000, 104, 99]) should return [99, 104, 140000]. 
*/

function nonMutatingSort(arr) {
  let copyArr = [].concat(arr); // It is a new method of copying an arr
  return copyArr.sort((a, b) => a - b);
}

console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
//[ 1, 4, 21, 30, 100000 ]
