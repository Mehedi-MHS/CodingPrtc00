//General method: had to write 'function' keyword

const person = {
  name: "John",
  sayHello: function () {
    return `Hello I'm ${this.name}`;
  },
};
console.log(person.sayHello());
//Hello I'm John

//ES6 method: direct write function

const person2 = {
  name: "Doe",
  sayHello() {
    return `Hello I'm ${this.name}`;
  },
};

console.log(person2.sayHello());
//Hello I'm Doe
