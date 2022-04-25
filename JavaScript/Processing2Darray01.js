/*Row wise processing:
 *To perform a row-wise computation, we simply have to flip the for loops so that the
  outer loop controls the columns and the inner loop controls the rows.
 *grades=[[student1,student2,student3],[student1,student2,student3],[student1,student2,student3]];
 */

var grades = [
    [88, 78, 92],
    [90, 79, 77],
    [85, 88, 92],
  ],
  total = 0,
  average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[col][row]; //just modified here
  }
  average = total / grades[row].length;
  console.log("Colum " + parseInt(row + 1) + " Average " + average.toFixed(2));
  total = 0;
  average = 0;
}
//Colum 1 Average 87.67
//Colum 2 Average 81.67
//Colum 3 Average 87.00
