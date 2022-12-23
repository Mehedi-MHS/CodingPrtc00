// array.splice(startIndex,amountToDelete,addNewValuesAtThatIndex);

let arr = [10, 11, 12, 12, 15];
let startIndex = 3;
let amountToDelete = 1;
arr.splice(startIndex, amountToDelete, 13, 14);
console.log(arr);
//[ 10, 11, 12, 13, 14, 15 ]
