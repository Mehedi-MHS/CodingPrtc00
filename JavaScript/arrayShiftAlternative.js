//array.shift() is used to remove first element of an array
//Here we will use alternative(complicated) method of shift()

/*from o'reilly dsa book*/
var arr1 = [4, 1, 2, 3, 4, 5];
for (var i = 0; i < arr1.length; ++i) {
  arr1[i] = arr1[i + 1]; //increasing index number.so index 0 will be removed
}
console.log(arr1);
//[ 1, 2, 3, 4, 5, undefined ]

/*using shift:it returns the removed value*/
var arr2 = [4, 1, 2, 3, 4, 5];
var removed = arr2.shift(); //4
console.log("removed:" + removed + "\nNow array:" + arr2);

//removed:4
//Now array:1,2,3,4,5
