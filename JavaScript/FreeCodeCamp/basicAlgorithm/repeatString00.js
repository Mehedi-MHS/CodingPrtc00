// repeat("*",3);   ***
// repeat("abc",2);  abcabc
// repeat("abc",-2); should return an empty string
// Do not use repeat() function

/* Method 1: using recursion */
function repeatString(str, num) {
  if (num <= 0) {
    return "";
  } else {
    return repeatString(str, num - 1) + str;
  }
}

console.log(repeatString("a", 3));
// aaa
console.log(repeatString("*", 5));
//*****=
console.log(repeatString("ab", -2));
// ""

/* Method 2: using loop */
function repeatString2(str, num) {
  let tmp = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      tmp += str;
    }
  }
  return tmp;
}

console.log(repeatString2("a", 3));
//aaa
console.log(repeatString2("b", 5));
// bbbbb
