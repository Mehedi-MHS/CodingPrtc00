//Getting min number from array general  method by me
var arr = [10, 25, 33, 72, 79, 80, 55];
var min = arr[0];
for (var i = 0; i < arr.length; ++i) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min); //10
