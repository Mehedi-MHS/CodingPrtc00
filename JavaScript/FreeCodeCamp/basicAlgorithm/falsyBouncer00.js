// Remove all the falsy values from array and return a new array
//falsy values are: null,false,undefined,NaN,"",0
/*
 Tests
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
You should not mutate arr.
*/
//Process 1: move the nonFalsy values to another array
//Process 2: remove the Falsy values from array using splice()

//Process 1:
//===============
function bouncer(arr) {
  let len = arr.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    if (!/(false|null|undefined|0|^\s*$|NaN)/.test(arr[i])) {
      // ^\s*$ is used to match empty string ""
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
}

bouncer([1, null, "a", "b", "", undefined, false]);
//[ 1, 'a', 'b' ]
bouncer(["a", "b", "c"]);
//[ 'a', 'b', 'c' ]
bouncer([null, "", NaN, 0, false]);
// []
