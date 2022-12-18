//Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
//Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function
//Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

class Book {
  constructor(author) {
    this._author = author;
  }
  //getter
  get writer() {
    return this._author;
  }
  //setter
  set writer(updateName) {
    this._author = updateName;
  }
}

const nobel = new Book("anonymous");
console.log(nobel.writer);
nobel.writer = "new writer";
console.log(nobel.writer);

//anonymous
//new writer
