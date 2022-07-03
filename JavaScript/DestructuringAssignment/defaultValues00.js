// Destructuring with default values

let person = {
  name: "Bob",
  age: 25,
};

let { phone = "123-456-789" } = person;

/* is equivalent to 
 let phone = person.hasOwnProperty('phone') ? person.phone : '123-456-789';
*/

console.log(phone);
//123-456-789
