/*
Diff Two Arrays:
================
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

Tests:
========
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
    */

/*MY ALGORITHM:
 * Determine the smaller array using theit length(by copying them,donot modify original array)
 * compare smaller array with larger array
 * If any item of smaller array found in larger array,remove it
 * At last,concat 2 array and return it
 */

function diffArray(arr1, arr2) {
  let smallArr = arr1.length > arr2.length ? [...arr2] : [...arr1],
    largeArr = arr1.length > arr2.length ? [...arr1] : [...arr2],
    smallArrLen = smallArr.length;
  //function to delete all the occurances of a value
  let deleteItem = (arr, index) => {
    const value = arr[index];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
        i--;
      }
    }
  };
  //endOf deleteItem function

  for (let i = 0; i < smallArrLen; i++) {
    if (largeArr.indexOf(smallArr[i]) >= 0) {
      //remove the duplicate item from large array
      deleteItem(largeArr, largeArr.indexOf(smallArr[i]));
      //also remove the duplicate item from smallArray
      smallArr.splice(i, 1);
      i--;
    }
  }

  return console.log(smallArr.concat(largeArr));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//[4]

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
//[ 'pink wool' ]

diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
);
//[]

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
//[ 'piglet', 4 ]
