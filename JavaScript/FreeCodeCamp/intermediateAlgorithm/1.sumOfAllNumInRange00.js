/*
Sum All Numbers in a Range:
===========================
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Tests:
=====
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.*/

/*
  Sum of all numbers in range (from L to R):
  ---------------------------------
  Here L-Lower Number & R-Larger Number,
  Mathematic formula (without loop)(loop will increase time complexity.)
  i) Find the sum of natural numbers till R and L-1 
  ii) Then subtract sum(R)-sum(l-1).
 */

function sumAll(arr) {
  //first determine which is lower and larger numbet
  //you can skip this point and instead use Math.abs() to determine absolute value to remove negative number
  let lowerNum, greaterNum;
  if (arr[0] < arr[1]) {
    lowerNum = arr[0];
    greaterNum = arr[1];
  } else {
    lowerNum = arr[1];
    greaterNum = arr[0];
  }

  //a function to make natural sum from 0 to n(math formula)
  let naturalSum = (n) => (n * (n + 1)) / 2;
  //apply math formula
  return naturalSum(greaterNum) - naturalSum(lowerNum - 1);
}

console.log(sumAll([1, 4])); //10
console.log(sumAll([4, 1])); //10
console.log(sumAll([5, 10])); //45
console.log(sumAll([10, 5])); //45
