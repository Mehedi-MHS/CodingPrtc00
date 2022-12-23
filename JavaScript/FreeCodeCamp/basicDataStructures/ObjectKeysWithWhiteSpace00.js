//To add object keys with whitespace(space between two words) use bracket notation
// let person={
//  id:1020,
// };
// eg: person['first name']="John";
// result:
//
// person={
// id:1020,
// 'first name':'John'
// }

let person = {
  name: "John",
};

person["hair color"] = "brown";

console.log(JSON.stringify(person));
//{"name":"John","hair color":"brown"}
