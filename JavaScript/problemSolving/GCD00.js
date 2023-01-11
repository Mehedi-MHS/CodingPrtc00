//GCD - Greatest Common Divisor

let num1 = 60,
  num2 = 24,
  remainder;
while (num2 != 0) {
  remainder = num1 % num2;
  num1 = num2;
  num2 = remainder;
}
console.log("GCD of 60 and 24 is: ", num1);
//GCD of 60 and 24 is:  12

/*
 GCD x LCM = num1 x num2
 so, LCM = (num1 x num2 )/GCD
 */
