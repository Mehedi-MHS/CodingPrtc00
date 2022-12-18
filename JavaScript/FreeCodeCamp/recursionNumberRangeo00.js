// this recursion will return an array from given min value to max value
// solved by me
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum, endNum - 1);
    countArr.push(endNum);
    return countArr;
  }
}

console.log(rangeOfNumbers(5, 10));
//[5,6,7,8,9,10]
