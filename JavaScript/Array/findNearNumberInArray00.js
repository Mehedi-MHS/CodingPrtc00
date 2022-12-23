//find near number of given number in the array
let arr = [10, 20, 50, 40, 15, 30];
let num = 37.5;
let index = 0;

let difference = Math.max.apply(null, arr);
if (arr.length > 0) {
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(num - arr[i]) < difference) {
      difference = Math.abs(num - arr[i]);
      index = i;
    }
  }
}

console.log(
  "Given:" + num + "\nNear Number:" + arr[index],
  "\nNear number index: " + index
);

/*
 Given:37.5
Near Number:40
Near number index: 3
*/
