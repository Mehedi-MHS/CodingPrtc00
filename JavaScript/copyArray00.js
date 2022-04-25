//shallow copy:If change one,another will be changed

var arr1 = [];
for (var i = 0; i < 10; ++i) {
  arr1[i] = i;
}
var copyarr1 = arr1;
copyarr1[5] = 300;
console.log(arr1[5]); //300 . modified copyarr1, but arr1 value also changed

//deep copy:Changing one donot affect other
//create a function to solve this

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function copy(array1, array2) {
  for (var i = 0; i < array1.length; ++i) {
    array2[i] = array1[i];
  }
}

var arr3 = [];
copy(arr2, arr3);
arr3[5] = 350;
//modified arr3 but arr2 not changed
console.log("arr3[5]:" + arr3[5]); //350
console.log("arr2[5]:" + arr2[5]); //6
