//find maximum number in array,general method by me
var arr = [1, 5, 7, 3, 4, 11, 23, 50, 45, 32];
var max = arr[0],
  len = arr.length;
for (var i = 0; i < len; ++i) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max); //50
