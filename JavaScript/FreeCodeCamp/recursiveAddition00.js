//Add first n elements of array and return their sum using
//recursive function

function sum(arr, n) {
  if (n <= 0) {
    return 0; //0 because if you add 0 it will do nothing
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([1, 2, 3, 4], 4));
