//An array can also be destructured if it's an argument to a function

function area([length, height]) {
  return (length * height) / 2;
}
var triangle = [4, 6, 4]; //last 4 will be skipped
console.log(area(triangle)); //12
