var arr = [1, -1, 0, 5, 3];
var target = 6;

function getIndex(nums, target) {
  var count = 0,
    index1,
    index2,
    flag = false;
  while (flag == false) {
    count++;
    index1 = nums[0];
    nums.shift();
    index2 = nums.indexOf(target - index1);
    if (index2 > -1) {
      flag = true;
    }
  }
  return [count - 1, count + index2];
}

console.log(getIndex(arr, target));
//[0,3]
