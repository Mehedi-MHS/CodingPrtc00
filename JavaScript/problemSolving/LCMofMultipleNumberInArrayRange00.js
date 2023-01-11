//Determine LCM of a range of numbers in array

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
