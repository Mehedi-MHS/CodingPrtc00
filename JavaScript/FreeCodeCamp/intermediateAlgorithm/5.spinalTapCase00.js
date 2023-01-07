/*
Spinal Tap Case:
=================

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Tests:
-------
spinalCase("This Is Spinal Tap") should return the string
this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string
this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string
the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string 
teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string
all-the-small-things.
*/

function spinalCase(str) {
  let copyStr = str,
    strArr = copyStr.split(""),
    len = strArr.length,
    newArr = [];
  let checkItem = (word, index) => {
    if (/[A-Z]/.test(word)) {
      return (index > 0 && strArr[index - 1]) == " "
        ? word.toLowerCase()
        : "-" + word.toLowerCase();
    } else if (/[a-z]|-/.test(word)) {
      return word;
    } else if (/\s/.test(word)) {
      return "-";
    }
  };

  for (let i = len; i >= 0; i--) {
    if (checkItem(strArr[i], i)) {
      newArr.push(checkItem(strArr[i], i));
    }
  }
  return console.log(newArr.reverse().join(""));
}

spinalCase("This Is Spinal Tap");
//this-is-spinal-tap
spinalCase("thisIsSpinalTap");
//this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show");
//the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh");
//teletubbies-say-eh-oh
spinalCase("AllThe-small Things");
//all-the-small-things
