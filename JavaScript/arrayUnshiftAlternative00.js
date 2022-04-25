/*Arr.unshift() is used to add an element at the beginning of an array.
 * without mutator function (unshift()),each existing element
 * of the array has to be shifted up one position before the new data is added.
 * its not useful way. so use unshift() method
 */

//Without unshift

let arr1 = [2, 3, 4, 5];
var newElement = 1;
for (var i = arr1.length; i >= 0; --i) {
  //reverse loop
  arr1[i] = arr1[i - 1]; //explaining this line below
  //here array length is 4. so for first loop arr1[i]==4 and arr1[i-1]==3
  //that means assigning 3rd porition into 4th position.That means increasing their index number
}
//after increasing each of the index, arry will look like this [ ,2,3,4,5 ];
//0 index is empty,so we can add the newElement here
arr1[0] = newElement;

console.log(arr1); //[ 1, 2, 3, 4, 5 ]

//With unshift
let arr2 = [2, 3, 4, 5];
arr2.unshift(1);
console.log(arr2); //[ 1, 2, 3, 4, 5 ]
