/*Columner processing:(column wise)
 *The outerloop moves through the rows, and the inner loop processes the columns. For the grades
 array, think of each row as a set of grades for one student. 
 *We will count average grade of each student
 *grades=[[student1,student1,student1],[student2,student2,student2],[student3,student3,student3]]
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
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student: " + parseInt(row + 1) + " Average: " + average.toFixed(2)
  );
  //reseting values
  total = 0;
  average = 0;
}

//Student: 1 Average: 86.00
//Student: 2 Average: 82.00
//Student: 3 Average: 88.33
