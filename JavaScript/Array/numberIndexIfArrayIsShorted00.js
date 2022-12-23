// You are given an array and a value(number),return it's index number
// as if the array is sorted
//Here we will detrtmine the value and it's index that is very close and less than
//the given value
let arr = [1, 3, 5, 6, 7],
  num = 4;
let greaterLess = {
  value: arr[0],
  index: 0,
};
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < num && arr[i] >= greaterLess.value) {
    greaterLess.value = arr[i];
    greaterLess.index = i;
  }
}

console.log(greaterLess.value, greaterLess.index);
//3 1
//so 4 should be at one index forward than it's less value.
//so 4's index is greaterLess.index+1
console.log(`Index of ${num} is ${greaterLess.index + 1}`);
//Index of 4 is 2
