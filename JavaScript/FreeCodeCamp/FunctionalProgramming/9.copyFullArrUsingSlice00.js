let arr1 = [1, 2, 3, 4, 5, 6, 7];
let copyArr = arr1.slice();
//donot provide any argument(parameter)
console.log(copyArr);
// [1, 2, 3, 4, 5, 6, 7]

copyArr.pop();
console.log(copyArr, arr1);
//[1,2,3,4,5,6]
//[1,2,3,4,5,6,7]
