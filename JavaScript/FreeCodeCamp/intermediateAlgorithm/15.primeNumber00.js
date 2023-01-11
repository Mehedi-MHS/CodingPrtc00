//From geeksForGeeks:Best way to check prime numbers
/*
to deal with large size input we will deal with a few numbers
such as 1, 2, 3, and the numbers which are divisible by 2 and 3 in
separate cases and for remaining numbers, we will iterate our
loop from 5 to sqrt(n) and check for each iteration whether that 
(iteration) or (that iteration + 2) divides n or not. If we find
any number that divides, we return false.
    */
//Prime number checking method by chatGPT
function isPrime(num) {
  if (num <= 0) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(4));
/*
true
true
true
false */
