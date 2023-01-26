/*
 Caesars Cipher:
 ===============

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Tests:
-------
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
  let strArr = str.split(""),
    len = strArr.length;
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    resultStr = "";
  let findWord = (index) => {
    return index <= 12 ? upper[index + 13] : upper[index - 13];
  };
  for (let i = 0; i < len; i++) {
    if (/[A-Z]/.test(strArr[i])) {
      resultStr += findWord(upper.indexOf(strArr[i]));
    } else {
      resultStr += strArr[i];
    }
  }
  return console.log(resultStr);
}

rot13("SERR PBQR PNZC");
//FREE CODE CAMP

rot13("SERR CVMMN!");
//FREE PIZZA!
rot13("SERR YBIR?");
//FREE LOVE!
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
