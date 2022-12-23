let arr = [7, 2, 7, 8, 1, 6];

let len = arr.length;

let sum = 0;

for (let i = 0; i < len; i++) {
  let tmpSum = sum + arr[i];
  if (tmpSum > 10) {
    sum += 0;
    arr.splice(i, 1);
    i--;
  } else {
    sum += arr[i];
  }
}

console.log(arr);

//[ 7, 2, 1 ]
