//Fibonacci Number Limit

function fibonacci(num) {
  let n1 = 0,
    n2 = 1,
    nextNum,
    newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    if (num < nextNum) {
      newArr.push(n1);
      //pushes another next number
      break;
    }
  }
  return console.log(newArr.join(","));
}

fibonacci(10);
//0,1,1,2,3,5,8
fibonacci(5);
//0,1,1,2,3,5
fibonacci(20);
//0,1,1,2,3,5,8,13
