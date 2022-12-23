//copyMachine([true,false,true],2) should return [[true,false,true],[true,false,true]]
//do this using while loop and spread operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }

  return newArr;
}

let result = copyMachine([true, false, true], 2);
console.log(result);
