//Difference between for..in and for..of loop
//for..in : finds the keys in loop
//for..of : finds the values in loop

var arr = [3, 5, 7, 8];
arr.foo = "hello";

for (var i in arr) {
  console.log(i);
}
//0 1 2 3 foo

for (var j of arr) {
  console.log(j);
}
//3 5 7 8
