/*
 
Reset an Inherited Constructor Property
When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
But duck and all instances of Bird should show that they were constructed by Bird (may be Animal)and not Animal (may be Bird). To do so, you can manually set the constructor property of Bird to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor
*/

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log(this.name + " eats.");
  },
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("sdsd");

console.log(duck.constructor);
// Animal
Bird.prototype.constructor = Bird;
console.log(duck.constructor);
//Bird
