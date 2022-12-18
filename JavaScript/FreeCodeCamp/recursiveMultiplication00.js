//multiply first n elements of array to create a product
//using function recursion (not loop)
function multiply(arr, n) {
  if (n <= 0) {
    return 1; //1 because if you multiply with 1 , it will do nothing
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

let res = multiply([1, 2, 3, 4], 4);
console.log(res);
//24
/*
 Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.*/
