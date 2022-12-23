//Check an object property is available or not by using 'hasOwnProperty' or 'in'
//correct method: Object.prototype.hasOwnProperty(objectName,propertyName)
let person = {
  name: "Alan",
  age: 33,
};

console.log(person.hasOwnProperty("age"));
//true
console.log(person.hasOwnProperty("age" && "name"));
// true

console.log(person.hasOwnProperty("age" && "name" && "gender"));
//false
console.log("age" in person);
//true
