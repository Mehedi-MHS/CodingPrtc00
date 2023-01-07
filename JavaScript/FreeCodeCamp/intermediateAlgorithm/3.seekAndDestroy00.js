/*
Seek and Destroy:
==================

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

Tests:
========
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]. 
*/

function destroyer(arr, ...args) {
  let copyArr = [...arr],
    argsArr = args,
    argsArrLen = argsArr.length;
  let deleteItem = (arr, value) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
        i--;
      }
    }
  };

  for (let i = 0; i < argsArrLen; i++) {
    if (copyArr.indexOf(argsArr[i]) >= 0) {
      deleteItem(copyArr, argsArr[i]);
    }
  }
  return console.log(copyArr);
}

destroyer([1, 2, 3, 4], 1, 2);
//[ 3, 4 ]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//[ 1, 5, 1 ]
destroyer([2, 3, 2, 3], 2, 3);
//[]
destroyer(["tree", "hamburger", 53], "tree", 53);
//['hamburger']
