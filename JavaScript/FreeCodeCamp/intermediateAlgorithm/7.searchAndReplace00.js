/*
Search and Replace:
===================

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

Tests:
=======
myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.
*/

function myReplace(str, before, after) {
  let result,
    strArr = str.split(" ");

  let makeFirstLetterCapital = (word) => {
    let arr = word.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  };
  let replaceWord = (arr, wordBefore, wordAfter) => {
    let newArr = [...arr],
      index = arr.indexOf(wordBefore);
    newArr.splice(index, 1, wordAfter);
    return newArr;
  };

  if (/[A-Z]/.test(before.split("")[0])) {
    result = replaceWord(strArr, before, makeFirstLetterCapital(after));
  } else {
    result = replaceWord(strArr, before, after.toLowerCase());
  }

  return console.log(result.join(" "));
}

myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("I think we should look up there", "up", "Down");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");

/*
Let us go to the mall
He is Sitting on the couch
I think we should look down there
This has a spelling error
His name is John
Let us get back to more Algorithms 
*/
