// Destructuring and renaming with default values 00
let person = {
  name: "Bob",
  age: 25,
};

let { phone: p = "123-456-789" } = person;

/*is equivalent to
let p=person.hasOwnProperty('phone')?person.phone: '123-456-789';
*/

console.log(p);
//123-456-789
