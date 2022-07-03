//Destructuring and renaming 00

let person = {
  name: "Bob",
  age: 25,
  gender: "male",
};

let { name: firstname } = person;

//is equivalent to
//let firstname=person.name; //Bob

console.log(firstname); //Bob
