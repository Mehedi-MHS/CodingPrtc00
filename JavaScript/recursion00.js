//Recursively making function calls

function factorial1(number) {
  if (number == 1) {
    return number;
  } else {
    return number * factorial1(number - 1);
  }
}

console.log(factorial1(5)); //120

//Simplified version by me
function factorial(number) {
  return number == 1 ? number : number * factorial(number - 1);
}
console.log(factorial(5)); //120
