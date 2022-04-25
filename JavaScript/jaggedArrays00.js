//A jagged array is an array where the rows in the array may have a different number of elements. One row may have three elements, while another row may have five elements,
//while yet another row may have just one element.
//Our previous 2D array handling program can handle this automatically

//RowWise average marks checking(Like 2Darray00.js)

var marks = [
  [78, 93],
  [82, 71, 75],
  [77, 71, 92, 86],
];
var total = 0,
  average = 0.0;
for (var row = 0; row < marks.length; ++row) {
  for (var column = 0; column < marks[row].length; ++column) {
    total += marks[row][column];
  }

  average = total / marks[row].length;
  console.log(
    "Student " +
      parseInt(row + 1) +
      " Marks " +
      marks[row] +
      " Average " +
      average
  );
  average = 0;
  total = 0;
}

//Student 1 Marks 78,93 Average 85.5
//Student 2 Marks 82,71,75 Average 76
//Student 3 Marks 77,71,92,86 Average 81.5
