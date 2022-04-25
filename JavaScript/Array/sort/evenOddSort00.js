//Sorting array by even or odd numbers
var res = [10, 2, 32, 33, 16, 0, 11, 23, 45].sort((a, b) => {
  return (a & 1) - (b & 1) || a - b;
});
console.log(res);
//[ 0, 2, 10, 16, 32,11, 23, 33, 45]
