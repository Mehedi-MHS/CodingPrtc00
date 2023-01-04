//Array.reduce() method practice

let users = [
  { name: "John", age: 34 },
  { name: "Oliver", age: 33 },
  { name: "Doe", age: 22 },
];

//sum of user ages
let sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
//89

//return new object
let newObject = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});

console.log(newObject);
//{ John: 34, Oliver: 33, Doe: 22 }
