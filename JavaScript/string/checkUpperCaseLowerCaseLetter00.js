// use regular expression [A-Z] for uppercase and [a-z] for lowercase letter
// by using test() method

function caseChecker(str) {
  let len = str.length;
  let resultStr = "";
  for (let i = 0; i < len; i++) {
    if (/[A-Z]/.test(str[i])) {
      resultStr += " " + str[i] + "- UPPERCASE \n";
    } else if (/[a-z]/.test(str[i])) {
      resultStr += " " + str[i] + "- lowercase \n";
    } else {
      resultStr += " " + str[i] + " - is Not alphabet \n";
    }
  }
  return console.log(resultStr);
}

caseChecker("A qUic7k");
/*
 A- UPPERCASE
   - is Not alphabet
 q- lowercase
 U- UPPERCASE
 i- lowercase
 c- lowercase
 7 - is Not alphabet
 k- lowercase
 */
