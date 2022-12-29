/*
 
Set the Child's Prototype to an Instance of the Parent
In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat();
duck inherits all of Animal's properties, including the eat method.
*/

//supertype or parent constructor
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log(this.name + " is eating.");
  },
};

//child constructor
function Bird(name) {
  this.name = name;
}

//inheriting properties from supertype constructor
Bird.prototype = Object.create(Animal.prototype);

//creating new instance of child constructor
let duck = new Bird("pawpaw");

duck.eat();
//pawpaw is eating.
