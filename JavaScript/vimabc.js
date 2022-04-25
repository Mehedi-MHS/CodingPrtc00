function Person() {
  this.name = "John doe";
  this.age = 35;
  this.greeting = greeting;
  this.id = id;
}

function greeting(txt) {
  var str = `Hello people ${txt}`;
  return str;
}

function id() {
  var str = `Hi friends . I'm ${this.name} . I'm ${this.age} years old.`;
  return str;
}

var p1 = new Person();
console.log(p1.greeting("Good morning"));

console.log(p1.id());
