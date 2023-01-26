//ROT-13 encoding algorithm
//get the current word (alphabets only) and replace it with the word that is next to 13 letter
//You can use encoding function twice to decode it.
//eg: ROT13Encode("Free") returns "Serr"
//But
//ROT13Encode(ROT13Encode("Free")) will return "Free"
//the same string given in the function;
function ROT13Encode(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = upper.toLowerCase();
  let resultStr = "";
  let findWord = (type, index) => {
    switch (type) {
      case "upperCase":
        return index <= 12 ? upper[index + 13] : upper[index - 13];
      case "lowerCase":
        return index <= 12 ? lower[index + 13] : upper[index - 13];
      default:
        return "";
    }
  };

  let strArr = str.split(""),
    len = strArr.length;
  for (let i = 0; i < len; i++) {
    if (/[A-Z]/.test(strArr[i])) {
      resultStr += findWord("upperCase", upper.indexOf(strArr[i]));
    } else if (/[a-z]/.test(strArr[i])) {
      resultStr += findWord("lowerCase", lower.indexOf(strArr[i]));
    } else {
      resultStr += strArr[i];
    }
  }

  return resultStr;
}

console.log(ROT13Encode("Free-Code-Camp"));
//SErr-PBqr-PnzC
console.log(ROT13Encode(ROT13Encode("Free-Code-Camp")));
//FREE-CODE-CAMP
