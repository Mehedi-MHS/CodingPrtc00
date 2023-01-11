/*
 
Sum All Odd Fibonacci Numbers:
==============================

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Tests:
========
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/

function sumFibs(num) {
  let fibonacciOddArr = (number) => {
    let n1 = 0,
      n2 = 1,
      nextNum,
      numArr = [];
    for (let i = 0; i < number; i++) {
      if (n1 > 0 && n1 % 2 !== 0) {
        numArr.push(n1);
      }
      nextNum = n1 + n2;
      n1 = n2;
      n2 = nextNum;
      if (nextNum > number) {
        if (n1 % 2 !== 0) {
          numArr.push(n1);
        }
        break;
      }
    }
    return numArr;
  };

  let sum = (arr) => {
    let len = arr.length,
      sum = 0;
    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
    return sum;
  };
  return console.log(sum(fibonacciOddArr(num)));
}

sumFibs(10);
//10
sumFibs(1000);
//1785
sumFibs(4);
//5
sumFibs(75024);
//60696
sumFibs(4000000);
//4613732
