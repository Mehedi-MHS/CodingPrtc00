//Factorial number generate by recursion
function factorialize(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialize(n - 1);
  }
}
console.log(factorialize(4));
//24

//Factorial number by while loop
function factorialize2(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

console.log(factorialize2(4));
//24
