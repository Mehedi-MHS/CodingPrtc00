//exercise from freecodecamp

//general object method
const pet1 = {
  name: "cat",
  food: "apple",
  colour: "white",
};

var name1 = pet1.name;
var food1 = pet1.food;
var colour1 = pet1.colour;

console.log(name1 + " " + food1 + " " + colour1);
//cat apple white

//DESTRUCTURING METHOD(single variable)
const pet2 = {
  name5: "cat",
  food: "apple",
  colour: "white",
};

var { name5 } = pet2;
console.log(name5); //cat

//DESTRUCTURING METHOD(multiple variable)
const pet3 = {
  name2: "cat",
  food2: "apple",
  colour2: "white",
};

var { name2, food2, colour2 } = pet3;
console.log(name2 + " " + food2 + " " + colour2);
