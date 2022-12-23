//We can insert an array element to another using spread operator at any index

let arr1 = [5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, ...arr1, 9, 10, 11];

console.log(arr2);
//[1,2,3,4,5,6,7,8,9,10,11]
