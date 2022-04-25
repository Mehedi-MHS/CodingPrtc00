//we can check how many arguments(parameters) has been passed in a function
//using arguments.length

//ex:1

function sum() {
  console.log("Total passed arguments:" + arguments.length);
  if (arguments.length < 1) {
    throw new TypeError("sum - takes atleast 1 argument");
  }
}

sum("hello", "hi");
//Total passed arguments:2

sum();
//Total passed arguments:0
//TypeError: sum - takes atleast 1 argument     at sum (/storage/emulated/0/codingprtc00/javascript/checkFunctionArgument00.js:9:11)
