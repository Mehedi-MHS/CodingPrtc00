function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}

console.log("Factorial of 3 is :" + factorial(3));
console.log("Factorial of 5 is :" + factorial(5));
console.log("Factorial of 6 is :" + factorial(6));
