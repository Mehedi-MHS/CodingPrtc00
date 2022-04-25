//Ways of creating 2D array
//the outerloop moves through the rows, and the inner loop processes the columns.
//way:1
Array.matrix = function (numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};
var nums1 = Array.matrix(5, 5, 0);
console.log(nums1[1][1]); //0
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]); //Joe

//way 2
//2D array in one line
var grades = [
  [77, 76, 89],
  [88, 75, 94],
  [82, 79, 77],
];
console.log(grades[2][2]); //77
