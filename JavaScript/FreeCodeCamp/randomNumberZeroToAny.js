//multiply the fraction random number with n then it will
//generate random number from 0 to (n-1)
//Here we will use 20 that will generate random number between 0-19

function generateRandom() {
  return Math.floor(Math.random() * 20);
}

console.log(generateRandom());
