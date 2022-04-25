/*
The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.
*/

///#####Example 1 ####

//using class

class First {
  display() {
    return "Method display of First class is invoked";
  }
}
class Second extends First {}

var a = new Second();
console.log(a.display()); //Method display of First class is invoked

//using prototype based approach

function firstX() {}
firstX.prototype.display = function () {
  return "Prototype based approach firstX function invoked";
};

function secondX() {}
secondX.prototype = Object.create(firstX.prototype);

var a = new secondX();
console.log(a.display()); //Prototype based approach firstX function invoked

//####Example 2 #####

//Using prototype based programming
function A() {}
A.prototype.display = function () {
  return "A is invoked";
};

/*function B(){}
B.prototype=Object.create(A.prototype);
*/
function B() {}
B.prototype.display = function () {
  return "B is invoked";
};

var a = [new A(), new B()];
a.forEach(function (msg) {
  console.log(msg.display()); //A is invoked   B is invoked
});

///Using class
//Donot use 'A' and 'B' as it was used in the previous example.It will throw an error
class C {
  display() {
    return "C is invoked";
  }
}

class D extends C {
  display() {
    return "D is invoked";
  }
}

var a = [new C(), new D()];
a.forEach(function (x) {
  console.log(x.display()); //C is invoked   D is invoked
});
