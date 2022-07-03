/* Destructuring function arguments */

//pull properties from an object passed into a function.
//This pattern simulates named parameters  instead of relying on argument position

let user = {
  name: "Jill",
  age: 33,
  profession: "Pilot",
};

function greeting({ name, profession }) {
  console.log(`Hello,${name} the ${profession}`);
}

greeting(user); //Hello,Jill the Pilot

/* This also works for arrays */

let parts = ["Hello", "world"];
function greeting2([first, second]) {
  console.log(`${first} ${second}`);
}
greeting2(parts); //Hello world
