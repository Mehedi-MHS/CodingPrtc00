//array.filter() also returns an array by filtering out
//some results from an existing array

//ex:1
//we want to get all the odd number from an array
var arr1 = [2, 3, 4, 5, 6, 7];
let odd = arr1.filter(function (a) {
  return a % 2 !== 0;
});

console.log(odd);
//[ 3, 5, 7 ]

//ex:2
var arrObj = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Doe", age: 31 },
  { id: 3, name: "Peter", age: 55 },
];
var young = arrObj.filter(function (person) {
  return person.age < 40;
});
console.log(young);
//[ { id: 1, name: 'John', age: 28 }, { id: 2, name: 'Doe', age: 31 } ]

//ex:03
function isEven(num) {
  return num % 2 == 0;
}
function isOdd(num) {
  return num % 2 !== 0;
}

//auto generating array
var arr2 = [];
for (var i = 0; i < 20; ++i) {
  arr2[i] = i + 2; // same as arr2.push(i+1);
}

console.log(
  "Main array:" +
    arr2 +
    "\nEven Numbers:" +
    arr2.filter(isEven) +
    "\nOdd numbers:" +
    arr2.filter(isOdd)
);
/*
 * Main array:2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
Even Numbers:2,4,6,8,10,12,14,16,18,20
Odd numbers:3,5,7,9,11,13,15,17,19,21
*/
