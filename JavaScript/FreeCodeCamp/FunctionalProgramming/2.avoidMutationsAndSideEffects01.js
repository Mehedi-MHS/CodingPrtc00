/*
 * Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
 *
 * Here we will use parameter instead of global fixedValue(like previous example)
 */

function incrementer(val) {
  return console.log(val + 1);
}

let fixedValue = 4;
incrementer(fixedValue);
//5
