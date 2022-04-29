//https://leetcode.com/problems/smallest-string-with-swaps
/**Not solved :(**/
//swap multiple times if needed but get the smallest string (characterCode)

function swap(s, pair) {
  var arr = s.split(""),
    len = pair.length;
  var sortpair = pair.sort();
  var gflag = false;
  while (gflag == false) {
    gflag = checkIt(arr, len, sortpair);
  }

  return arr.join("");
}

function swapIt(array, length, pair) {
  for (var i = 0; i < length; ++i) {
    if (array[pair[i][0]] < array[pair[i][1]]) {
      continue;
    }
    [array[pair[i][0]], array[pair[i][1]]] = [
      array[pair[i][1]],
      array[pair[i][0]],
    ];
  }
}

function checkIt(array, length, pair) {
  var flag = true;
  for (var i = 0; i < length; ++i) {
    if (array[pair[i][0]] > array[pair[i][1]]) {
      flag = false;
      swapIt(array, length, pair);
    }
  }
  return flag;
}

var a = "dcab";
var pairs = [
  [0, 3],
  [1, 2],
  [0, 2],
];
console.log(swap(a, pairs));
//result:abdc,expected:abcd,status:wrong
console.log(
  swap("cba", [
    [0, 1],
    [1, 2],
  ])
);
//result:abc,expected:abc,status:ok

/*Next try:
 * compare 2 pair result,which one has less value,apply swap on that pair
 * do it untill you get smallest string using these swaps
 */
