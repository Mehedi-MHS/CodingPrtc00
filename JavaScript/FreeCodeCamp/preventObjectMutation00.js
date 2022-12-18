//if you declare an object or array using 'const', you can still change it's single values
//To prevent objects from changing their values(prevent mutation), You can use Object.freeze() method
//then if you try to change the freezed object value,it will throw an error

//const method: using const,you cannot reassign a new object in the same variable,but you can change its value
const obj1 = {
  name: "Lorem",
  age: 33,
};
//changing value
obj1.name = "Ipsum";
console.log(obj1);
//{ name: 'Ipsum', age: 33 }

// Trying to reassign a new object which will show error in editor and console.
//const obj1 = {
//  name: "anf",
//  age: 99,
//};

//using Object.freeze() , you can neither reassign a new object nor
//change existing object's value.Trying to do this will throw an error
let obj2 = {
  name: "John",
  age: 45,
};
Object.freeze(obj2);
obj2.name = "Doe";
console.log(obj2);
//{ name: 'John', age: 45 }
//you cannot edit,add or delete locked(freezed) object properties
