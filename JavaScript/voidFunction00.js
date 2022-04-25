//A subprocedure of void function in javascript.
//void function means a function that donot reaturns anything but performs its task.

function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}

var grade = [76, 55, 83, 69, 56];
curve(grade, 5);
console.log(grade);
//[ 81, 60, 88, 74, 61 ]
