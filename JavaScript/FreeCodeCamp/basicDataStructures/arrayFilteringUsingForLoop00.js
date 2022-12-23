//A function has 2 parameters, one is a nested array and another is a value
//return those nested arrays which donot contains the value given as parameter.

/*
 filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
 */

function filteredArray(arr, value) {
  let newArr = [];
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (arr[i].indexOf(value) === -1) {
      newArr.push([...arr[i]]); //or use newArr.push(arr[i])
    }
  }
  return console.log(newArr);
}
//testing
filteredArray(
  [
    [10, 8, 3],
    [14, 6, 23],
    [3, 18, 6],
  ],
  18
);
filteredArray(
  [
    ["trumpets", 2],
    ["flutes", 4],
    ["saxophones", 2],
  ],
  2
);
filteredArray(
  [
    ["amy", "beth", "sam"],
    ["dave", "sean", "peter"],
  ],
  "peter"
);
filteredArray(
  [
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9],
  ],
  3
);
