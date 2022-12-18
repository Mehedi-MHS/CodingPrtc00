//Write a recursive function that takes parameter 'n' and returns
//an array that contains number from 1 through n
//eg: countUp(5); returns [1,2,3,4,5]

function countUp(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countUp(n - 1);
    countArr.push(n);
    return countArr;
    //to make the array reverse,use countArr.unshift(n)
  }
}

console.log(countUp(5));
//[1,2,3,4,5]
