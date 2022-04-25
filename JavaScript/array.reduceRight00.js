//similar as reduce but works from right to left
//but reduce() works from left to right

function add(accumulatedString, item) {
  return accumulatedString + item;
}

var arr = ["Quick ", "brown ", "fox "];
console.log(arr.reduceRight(add));
//fox brown Quick
