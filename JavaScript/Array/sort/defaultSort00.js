//The default method will sort the array according to string Unicode code points.
//To sort an array numerically the .sort() method needs to have a compareFunction passed to it.

console.log(
  [
    "s",
    "t",
    "a",
    34,
    "K",
    "o",
    "v",
    "E",
    "r",
    "2",
    "4",
    "o",
    "W",
    -1,
    "-4",
  ].sort()
);
/*
 [
  -1,  '-4', '2', 34,                       '4', 'E',  'K', 'W',
  'a', 'o',  'o', 'r',
  's', 't',  'v'
]
* Note: The uppercase characters have moved above lowercase. The array is not in alphabetical order, and
  numbers are not in numerical order.
*/
