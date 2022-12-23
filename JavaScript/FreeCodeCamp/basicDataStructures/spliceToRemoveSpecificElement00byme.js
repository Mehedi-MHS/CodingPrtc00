//remove the odd numbers from array using splice() method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrLen = arr.length;
for (let i = 0; i < arrLen; i++) {
  if (arr[i] % 2 !== 0) {
    arr.splice(i, 1);
  }
}

console.log(arr);
//[ 2, 4, 6, 8 ]
