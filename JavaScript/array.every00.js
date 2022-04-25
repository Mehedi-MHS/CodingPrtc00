function isEven(num) {
  return num % 2 == 0;
}
let a1 = [4, 6, 8, 2, 10];
var even = a1.every(isEven);
if (even) {
  console.log("All numbers are even");
} else {
  console.log("All numbers are not even");
} //All numbers are even

let a2 = [3, 4, 6, 8];
var even2 = a2.every(isEven);
even2
  ? console.log("All numbers are even")
  : console.log("All numbers are not even");
//All numbers are not even.
