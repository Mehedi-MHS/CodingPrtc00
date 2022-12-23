/*
 Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Tests:
==========
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
getIndexToIns([], 1) should return 0.
*/

//algorithm:
//0:Check array length;
//1: if array length is greater than 0,count the numbers lower than given 'num'
//2: count the occurances of the given num
//3: if given num occurance if greater than 0, decrease 1 from recent count
//4: return the count as the index of the given num;

function getIndexToIns(arr, num) {
  let lowerNum = 0,
    occurance = 0;
  let len = arr.length;

  if (len > 0) {
    for (let i = 0; i < len; i++) {
      if (arr[i] <= num) {
        lowerNum++;
        if (arr[i] == num) {
          occurance++;
        }
      }
    }
  }
  if (occurance) {
    lowerNum--;
  }

  console.log(lowerNum);
}
getIndexToIns([10, 20, 30, 40, 50], 35);
//3
getIndexToIns([10, 20, 30, 40, 50], 30);
//2
getIndexToIns([40, 60], 50);
//1
getIndexToIns([3, 10, 5], 3);
//0

getIndexToIns([5, 3, 20, 3], 5);
//2
getIndexToIns([2, 20, 10], 19);
//2
getIndexToIns([2, 5, 10], 15);
//3
getIndexToIns([], 1);
//0
