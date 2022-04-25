//Numerical Sort (ascending)
var res1 = [100, 1000, 10, 10000, 1].sort((a, b) => {
  return a - b;
});
console.log(res1);
//[ 1, 10, 100, 1000, 10000 ]

//Numerical sort (descending)
var res2 = [100, 1000, 10, 10000, 1].sort((a, b) => {
  return b - a;
});
console.log(res2);
//[ 10000, 1000, 100, 10, 1 ]
