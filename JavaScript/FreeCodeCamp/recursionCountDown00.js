//if you pass n to the function,it will return an array from
//n through 1. eg: countDown(5);
//[5,4,3.2.1]

function countDown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countDown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}

console.log(countDown(5));
//[5,4,3,2,1]
