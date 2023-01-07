/*
 Missing letters:
===================

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Tests:
-------
fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.
fearNotLetter("bcdf") should return the string e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */
function fearNotLetter(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz",
    alphabetArr = alphabets.split(""),
    strArr = str.split(""),
    startWord = strArr[0],
    endWord = strArr[strArr.length - 1];
  let cutStrArr = alphabetArr.slice(
      alphabetArr.indexOf(startWord),
      alphabetArr.indexOf(endWord) + 1
    ),
    cutStrArrLen = cutStrArr.length;
  for (let i = 0; i < cutStrArrLen; i++) {
    if (!(cutStrArr[i] === strArr[i])) {
      return console.log(cutStrArr[i]);
    }
  }
  return console.log(undefined);
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
/*
d
i
u
e
undefined */
