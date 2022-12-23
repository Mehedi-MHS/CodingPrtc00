//return an array of largest numbers found in each
//of the nested array

let nestedArr = [
  [15, 32, 26, 13],
  [71, 22, 43, 56],
  [91, 11, 17, 73],
  [57, 56, 78, 21],
];
let nestedArr2 = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
];
function LargestNumber(arr) {
  let newArr = [];
  let large = 0;
  for (let i = 0; i < arr.length; i++) {
    large = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > large) {
        large = arr[i][j];
      }
    }

    newArr.push(large);
    large = 0; //resetting large value
  }
  return newArr;
}

let lnum1 = LargestNumber(nestedArr);
console.log(lnum1);
//[ 32, 71, 91, 78 ]

let lnum2 = LargestNumber(nestedArr2);
console.log(lnum2);

//[ 25, 48, 21, -3 ]
