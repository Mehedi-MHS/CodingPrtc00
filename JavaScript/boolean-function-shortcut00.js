//boolean function shortcut
function iseven(num){
  return num%2==0;
}
/*This function is shortcut of

function iseven(num){
  if(num%2==0){
    return true;
  }else{
    return false;
  }
}

*/

console.log(iseven(2)); //true
console.log(iseven(5));//false

//Array.every() method

let arr=[2,4,6,8];
console.log(arr.every(iseven)); //true

//alternative way
function iseven2(num){
  return console.log(num%2==0);
}
let arr2=[2,3,4,5];
arr2.forEach(iseven2); // true false true false
//much like callback

