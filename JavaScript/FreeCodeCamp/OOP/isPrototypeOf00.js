/*
 Understand Where an Object’s Prototype Comes From
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
This would return true.
*/

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

//console.log(Bird.prototype.isPrototypeOf(duck));
//Is is old method,so it will show an error. Correct method is given below
console.log(Object.prototype.isPrototypeOf.call(Bird, duck));
//false
console.log(Object.prototype.hasOwnProperty.call(duck, "name"));
//true

//according to chatGPT,Object.prototype.isPrototypeOf() is a function ,not object
//insted use getPrototypeOf() method
console.log(Object.getPrototypeOf(duck) === Bird.prototype);
//true
