/*
 
Smallest Common Multiple or Least Common Multiple:
===================================================

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Tests:
--------
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommon(arr) {
  let rangeArr = [];
  for (let i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
    rangeArr.push(i);
  }
  let len = rangeArr.length;
  let GCD = (n1, n2) => {
    let upperNumber = n1 > n2 ? n1 : n2,
      lowerNumber = n1 < n2 ? n1 : n2,
      remainder;
    while (lowerNumber != 0) {
      remainder = upperNumber % lowerNumber;
      upperNumber = lowerNumber;
      lowerNumber = remainder;
    }
    return upperNumber;
  };
  let LCM = (n1, n2) => {
    return (n1 * n2) / GCD(n1, n2);
  };

  let lcm;
  for (let i = 0; i < len; i++) {
    if (rangeArr[i + 1]) {
      lcm = LCM(i == 0 ? rangeArr[0] : lcm, rangeArr[i + 1]);
    }
  }
  return console.log(lcm);
}

smallestCommon([1, 5]);
//60
smallestCommon([5, 1]);
//60
smallestCommon([2, 10]);
//2520
smallestCommon([1, 13]);
//360360
smallestCommon([23, 18]);
//6056820
