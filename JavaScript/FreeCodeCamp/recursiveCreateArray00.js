//create an array that contains 0-n number using function recursion

function countUp(n) {
  if (n < 1) {
    return [];
  } else {
    let countArray = countUp(n - 1);
    countArray.push(n);
    return countArray;
  }
}

console.log(countUp(5));
// [1,2,3,4,5]
