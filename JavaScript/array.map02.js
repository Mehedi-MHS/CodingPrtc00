//example:1->increasing each number
function curve(grade) {
  return (grade += 5);
}
var arr = [77, 80, 73, 84, 78];
var newarr = arr.map(curve);
console.log(newarr);
//[ 82, 85, 78, 89, 83 ]

//example 2: getting first word from each element
function first(word) {
  return word[0];
}
let arr2 = ["Hello", "Strange", "Man"];
let accronym = arr2.map(first); //returns array
console.log(accronym.join());
//H,S,M
