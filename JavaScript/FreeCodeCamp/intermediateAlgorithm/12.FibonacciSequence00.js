/*Fibonacci Number prtc by me:
 * ==========================
 * The first two numbers in the Fibonacci sequence are 1 and 1.
 * Every additional number in the sequence is the sum of the two previous numbers.
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 */

// Fibonacci nth number sequence
function fibonacciSequence(num) {
  let n1 = 0,
    n2 = 1,
    nextNum,
    newArr = [];
  for (let i = 1; i < num; i++) {
    newArr.push(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
  return console.log(newArr.join(","));
}

fibonacciSequence(10);
//0,1,1,2,3,5,8,13,21
