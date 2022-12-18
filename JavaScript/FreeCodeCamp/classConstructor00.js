//ES6 provides a new syntax to create objects, using the class keyword.
//If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.
//Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

//Explicit constructor(constructor has a value)

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log(`To ${this.targetPlanet} !`);
  }
}

const zeus = new SpaceShuttle("Jupiter");
zeus.takeOff();
//To Jupiter !

//Implicit constructor(no constructor value)

class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const Atlas = new Rocket();
Atlas.launch();
//To the moon!
