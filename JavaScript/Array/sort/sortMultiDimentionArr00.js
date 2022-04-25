//Sorting multidimentional array
var marr = [
  ["key1", 10],
  ["key2", 3],
  ["key3", 40],
  ["key4", 20],
];
var sort = marr.sort((a, b) => {
  return a[1] - b[1];
});
console.log(sort);
/*
 [ [ 'key2', 3 ], [ 'key1', 10 ], [ 'key4', 20 ], [ 'key3', 40 ] ]
 */
