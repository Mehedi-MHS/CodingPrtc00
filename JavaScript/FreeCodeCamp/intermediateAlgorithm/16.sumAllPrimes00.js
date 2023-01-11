/*
Sum All Primes:
-----------------
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

Tests:
=======
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(limit) {
  let primeArr = [];
  let isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i <= limit; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }

  let sumArr = (arr) => {
    let len = arr.length,
      sum = 0;
    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
    return sum;
  };

  return console.log(sumArr(primeArr), primeArr);
}

sumPrimes(10);
//17
sumPrimes(977);
//73156
