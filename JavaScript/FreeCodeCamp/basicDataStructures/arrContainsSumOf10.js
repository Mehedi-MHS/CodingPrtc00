//Remove extra elements from array,so that it contains elements that
//are the sum of 10

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

let arrLen = arr.length;
let count = 0;
for (let i = 0; i < arrLen; i++) {
  if (count + arr[i] > 10) {
    arr.splice(i, 1);
    i--;
  } else {
    count += arr[i];
  }
}

console.log(arr);
//[ 2, 4, 1, 2, 1 ]
