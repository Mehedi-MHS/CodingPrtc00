//Flatten 2D array - from JsNotesForProfessionals page : 106

var arrL1 = [1, 2, [3, 4]];

//version >=6 ES6
function flattenES6(arr) {
  return [].concat(...arr);
}

console.log(flattenES6(arrL1));
//[ 1, 2, 3, 4 ]

//version >=5 ES5 (in ES5 we can achieve this using .apply() )
function flatten(arr) {
  return [].concat.apply([], arr);
}
console.log(flatten(arrL1));
//[ 1, 2, 3, 4 ]
