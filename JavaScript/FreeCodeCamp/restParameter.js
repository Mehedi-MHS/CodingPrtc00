//rest parameter (...param) allow us to add variable number of parameters in a function

function HowManyArgs(...args) {
  return "You have passed " + args.length + " arguments";
}

console.log(HowManyArgs(1, 2, "three", null));

//You have passed 4 arguments

//adding all the numbers in parameters

function Add(...nums) {
  let total = 0;
  nums.forEach((num) => (total += num));
  return total;
}

console.log(Add(1, 2, 3, 4, 5));
//15
