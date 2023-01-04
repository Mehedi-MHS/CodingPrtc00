/*
 From currying:

 Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13


 */

function impartial(x, y, z) {
  return console.log(x + y + z);
}
const partialFn = impartial.bind(this, 1, 2);
//extra 3 (1+2) will be added to the parameter
partialFn(10);
//13
