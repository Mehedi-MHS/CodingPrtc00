function convert(str) {
  let arr = [],
    len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i].match(/[a-zA-Z|0-9]/)) {
      arr.push(String(str[i].toUpperCase()));
    }
  }
  console.log(arr);
  return arr;
}

function palindrome(str) {
  let normalTextArr = convert(str);
  let reverseArr = [];
  const copy1 = normalTextArr.join("");
  let arrLen = normalTextArr.length;
  for (var i = arrLen; i >= 0; i--) {
    reverseArr.push(normalTextArr[i]);
  }

  if (copy1 === reverseArr.join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("madaM"));
console.log(palindrome("12*#g21"));
console.log(palindrome("He_l45lolleh"));
