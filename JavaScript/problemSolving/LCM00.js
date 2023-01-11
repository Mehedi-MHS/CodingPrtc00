//To determine LCM,first determine GCD
//as LCM=(num1 x num2)/GCD

//Determine the LCM of 60 and 24

function GCD(num1, num2) {
  let upperNumber = num1 > num2 ? num1 : num2,
    lowerNumber = num1 < num2 ? num1 : num2,
    remainder;
  while (lowerNumber != 0) {
    remainder = upperNumber % lowerNumber;
    upperNumber = lowerNumber;
    lowerNumber = remainder;
  }
  return upperNumber;
}

let n1 = 60,
  n2 = 24;
let LCM = (n1 * n2) / GCD(n1, n2);

console.log("LCM of 60 and 24 is : ", LCM);
//LCM of 60 and 24 is :  120
