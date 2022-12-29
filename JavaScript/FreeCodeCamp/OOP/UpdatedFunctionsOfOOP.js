function Bird(name) {
  this.name = name;
}

let duck = new Bird("Alex");

//hasOwnProperty
//old method: duck.hasOwnProperty("name");
//new method
console.log(Object.prototype.hasOwnProperty.call(duck, "name"));
//true
