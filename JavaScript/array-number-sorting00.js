/*arr.sort() works well for strings,but donot works for numbers*/
let arr1=["abc","ab","a","abcde","abcd"];
arr1.sort();
console.log(arr1); // ["a","ab","abc","abcd","abcde"];
//string-sorting:working..

let arr2=[10,5,25,50,15,20];
console.log(arr2.sort()); //[10,15,20,25,5,50] 
//number-sorting:not working...


function compare(num1,num2){
  return num1-num2;
}
console.log(arr2.sort(compare));// [5,10,15,20,25,50]
//working... :)


