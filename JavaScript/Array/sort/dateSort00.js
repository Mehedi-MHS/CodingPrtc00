//Date Sort (descending)

var dates = [
  new Date(2007, 11, 23),
  new Date(2011, 9, 27),
  new Date(2005, 6, 7),
  new Date(2050, 7, 17),
];

//WAY : 1

var sort1 = dates.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log(sort1);
/*
 [
  2050-08-16T18:00:00.000Z,                 2011-10-26T18:00:00.000Z,
  2007-12-22T18:00:00.000Z,
  2005-07-06T18:00:00.000Z
]
*/

//WAY : 2
var sort2 = dates.sort((a, b) => {
  return b - a;
});
console.log(sort2);

//Date sort (ascending) by me
var sort3 = dates.sort((a, b) => {
  return a - b;
});
console.log(sort3);
/*
 [
  2005-07-06T18:00:00.000Z,
  2007-12-22T18:00:00.000Z,
  2011-10-26T18:00:00.000Z,
  2050-08-16T18:00:00.000Z
]
*/
