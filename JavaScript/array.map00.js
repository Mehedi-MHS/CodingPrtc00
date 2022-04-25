/*map() and filter() is used to produce a new array from existing array
 * array.map(function(value,index,arr){})
 * value : The element itself
 * index : index of the element(optional)
 * arr : The entire array(optional)
 */

//example1
let newarr1 = [1, 2, 3, 4].map(function (value /*, index, array*/) {
  return value + 1;
});
console.log(newarr1);
//[ 2, 3, 4, 5 ]

//example2:getting length of each element
let newarr2 = ["apple", "banana", "mango"].map(function (a) {
  return a.length;
});
console.log(newarr2);
//[ 5, 6, 5 ]

//example3:not important
["ab", "cd"].map(function (value) {
  console.log(this); //here returns nodejs object. But in browser,it will return window object
  return value.length;
});
