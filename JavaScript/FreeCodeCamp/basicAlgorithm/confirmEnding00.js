// confirmEnding("Jackfruit","uit"); true
// confirmEnding("Jackfruit","t"); true
// confirmEnding("Jackfruit","fru"); false

/* Solution 1 */

function confirmEnding(str, target) {
  let targetLen = target.length;
  let strLen = str.length;
  let targetPartFromStr = str.slice(strLen - targetLen, strLen);
  if (targetPartFromStr === target) {
    return true;
  } else {
    return false;
  }
}

let test1 = confirmEnding("Jackfruit", "uit");
console.log(test1);
//true
let test2 = confirmEnding("Jackfruit", "t");
console.log(test2);
//true
let test3 = confirmEnding("Jackfruit", "fru");
console.log(test3);
//false

/* Solution 2 */

function confirmEnding2(str, test) {
  if (str.endsWith(test)) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding2("Jackfruit", "ruit"));
//true
console.log(confirmEnding2("Jackfruit", "t"));
//true
console.log(confirmEnding2("Jackfruit", "frui"));
//false
