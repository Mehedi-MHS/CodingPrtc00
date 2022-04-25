function isEven(n) {
  return n % 2 == 0;
}

let a1 = [2, 3, 6, 7];
a1.some(isEven)
  ? console.log("Some values are even")
  : console.log("There is no even value at all");

//Some values are even

let a2 = [1, 3, 5, 7];
a2.some(isEven)
  ? console.log("Some values are even")
  : console.log("There is no even value at all");

//There is no even value at all
