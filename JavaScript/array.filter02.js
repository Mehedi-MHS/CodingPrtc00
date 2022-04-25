//from:Javascript Data Structure and Alhorithm
//ex:1
//Auto generating array of marks then filtering out passed marks
var grades = [];
for (var i = 0; i < 20; ++i) {
  grades[i] = Math.floor(Math.random() * 101);
}
function passed(grade) {
  return grade >= 60;
}
var passedNum = grades.filter(passed);
console.log("Grades:" + grades + "\nPassed numbers:" + passedNum);
//Grades:41,96,4,42,16,96,64,78,82,4,26,71,15,76,100,35,79,58,54,26
//Passed numbers:96,96,64,78,82,71,76,100,79

//ex:2:making spelling rule
//Of course, we can also use filter() with strings. Here is an example that applies the
//spelling rule “i before e except after c”:
function afterc(str) {
  if (str.indexOf("cie") > -1) {
    return true;
  }
  return false;
}
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misSpelled = words.filter(afterc);
console.log("MisSpelled words: " + misSpelled);
//MisSpelled words: recieve,percieve,concieve
