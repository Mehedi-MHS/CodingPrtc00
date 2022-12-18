//Here this formula will generate random number from min number
//to max number
//

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateRandom(10, 20));
