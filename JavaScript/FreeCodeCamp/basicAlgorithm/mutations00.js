/*
 Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

Tests:
===========
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
mutation(["ate", "date"]) should return false.
mutation(["Tiger", "Zebra"]) should return false.
mutation(["Noel", "Ole"]) should return true.
 */

function mutation(arr) {
  let arr2 = arr[1].split("");
  let arr2Len = arr2.length;
  for (let i = 0; i < arr2Len; i++) {
    let newRegex = new RegExp(arr2[i], "i");
    if (!newRegex.test(arr[0])) {
      return console.log(false);
    }
  }
  return console.log(true);
}

mutation(["hello", "hey"]); ///////////// false.
mutation(["hello", "Hello"]); ///////////// true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); ///////////////true.
mutation(["Mary", "Army"]); ///////////// true.
mutation(["Mary", "Aarmy"]); ////////////// true.
mutation(["Alien", "line"]); ///////////// true.
mutation(["floor", "for"]); ///////////// true.
mutation(["hello", "neo"]); ///////////// false.
mutation(["voodoo", "no"]); ///////////// false.
mutation(["ate", "date"]); ///////////// false.
mutation(["Tiger", "Zebra"]); ////////////// false.
mutation(["Noel", "Ole"]); ///////////// true.
