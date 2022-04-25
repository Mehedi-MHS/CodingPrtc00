var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
function check(array) {
  var arrlen = array.length;
  var obj = {
    correct: [],
    wrong: [],
  };
  for (var i = 0; i < arrlen; ++i) {
    array[i].indexOf("cie") > -1
      ? obj.wrong.push(array[i])
      : obj.correct.push(array[i]);
  }
  return obj;
}

var result = check(words);
console.log(
  "Total words:" +
    words +
    "\nCorrect:" +
    result.correct +
    "\nIncorrect: " +
    result.wrong
);
/*
 * Total words:recieve,deceive,percieve,deceit,concieve                                Correct:deceive,deceit
Incorrect: recieve,percieve,concieve
*/
