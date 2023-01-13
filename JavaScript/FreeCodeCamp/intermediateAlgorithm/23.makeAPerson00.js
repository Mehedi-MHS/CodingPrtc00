/*
Make a Person:
==============

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Tests:
--------
No properties should be added. Object.keys(bob).length should always return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return the string Bob.
bob.getLastName() should return the string Ross.
bob.getFullName() should return the string Bob Ross.
bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/

const Person = function (FirstAndLast) {
  let nameArr = FirstAndLast.split(" ");
  this.getFirstName = function () {
    return console.log(nameArr[0]);
  };
  this.getLastName = function () {
    return console.log(nameArr[1]);
  };
  this.getFullName = function () {
    return console.log(nameArr[0] + " " + nameArr[1]);
  };
  this.setFirstName = function (param) {
    nameArr[0] = param;
  };
  this.setLastName = function (param) {
    nameArr[1] = param;
  };
  this.setFullName = function (param) {
    let arr = param.split(" ");
    nameArr[0] = arr[0];
    nameArr[1] = arr[1];
  };
};

let bob = new Person("Bob Smith");
console.log(bob instanceof Person);
//true;
console.log(Object.keys(bob).length);
//8
console.log(bob.firstName);
//undefined
bob.getFirstName();
//Bob
bob.getLastName();
//Smith
bob.getFullName();
//Bob Smith
bob.setFirstName("John");
bob.getFullName();
//John Smith
bob.setFullName("new name");
bob.getFullName();
//new name
bob.getFirstName();
//new
bob.setLastName("dodo");
bob.getLastName();
//dodo
