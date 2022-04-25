//There are 2 ways to create new array from existing array.
//concat() function allow you to put together 2 or morre arrays
//splice() function allow you to create a new array as a subset of existing array

var arr1 = ["Apple", "Mango", "Banana"];
var arr2 = ["John", "Doe", "Jennifer"];
var newarray = arr1.concat(arr2);
console.log(newarray); //[ 'Apple', 'Mango', 'Banana', 'John', 'Doe', 'Jennifer' ]

let arr3 = ["The", "Third", "array"];

var newarray2 = arr1.concat(arr2, arr3);
console.log(newarray2);
//['Apple',  'Mango', 'Banana', 'John','Doe',    'Jennifer', 'The',    'Third',  'array']
