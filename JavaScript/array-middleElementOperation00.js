//splice(position,0,values) to add element in any position especially
//middle of an array.

/*Adding value in the middle of array*/

var arr1 = [1, 2, 3, 7, 8, 9];
arr1.splice(3, 0, 4, 5, 6);
console.log(arr1); //[ 1, 2, 3, 4, 5,6, 7, 8, 9]

/**********/

var arr2 = [1, 2, 3, 7, 8, 9];
var elem = [4, 5, 6];
arr2.splice(3, 0, elem); //here it will add array instead of values
console.log(arr2); //[ 1, 2, 3, [ 4, 5, 6 ], 7, 8, 9 ]
console.log(arr2[4]); //7

//splice(position,numberOfItems) for removing array elements
var arr3 = [1, 2, 3, 17, 18, 19, 4, 5, 6];
var removed = arr3.splice(3, 3);
console.log("removed:" + removed + "\nNow:" + arr3);

//removed:17,18,19
//Now:1,2,3,4,5,6
