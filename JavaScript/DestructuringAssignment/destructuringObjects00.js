//Destructuring objects 00 //   //part 1//

let person = {
  name: "Bob",
  age: 25,
};

let { name, age } = person;
console.log(name + " " + age);
/*is equivalent to
let name = person.name; //Bob
let age = person.age; //25
*/
