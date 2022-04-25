//simple update:
//we will add a simple function to count the number females and males
//waiting to dance

var fs = require("fs");

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count; //added new method
}

function enqueue(data) {
  this.dataStore.push(data);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}
function toString() {
  var str = "";
  var arrLen = this.dataStore.length;
  for (var i = 0; i < arrLen; ++i) {
    str += this.dataStore[i] + "\n";
  }
  return str;
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

function count() {
  return this.dataStore.length;
}

//end of queue constructor function

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancer(males, females) {
  var names = fs.readFileSync("dancers.txt", { encoding: "utf8" }).split("\n");
  var namesLength = names.length;
  //  for (var i = 0; i < namesLength; ++i) {
  //    names[i] = names[i].trim();
  //  }
  //will trim in the next loop directly (my idea :)
  for (var j = 0; j < namesLength; ++j) {
    var dancer = names[j].trim().split(" ");
    var name = dancer[1];
    var sex = dancer[0];
    if (sex == "F") {
      females.enqueue(new Dancer(name, sex));
    } else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females) {
  console.log("The dance partners are:\n");
  while (!females.empty() && !males.empty()) {
    var person = females.dequeue();
    console.log("Female dancer is : " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is : " + person.name + "\n");
  }
}

//testing program
var maleDancers = new Queue(),
  femaleDancers = new Queue();
getDancer(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (maleDancers.count() > 0) {
  console.log(
    "There are " + maleDancers.count() + " male dancers waiting to dance"
  );
}
if (femaleDancers.count() > 0) {
  console.log(
    "There are " + femaleDancers.count() + " female dancers waiting to dance"
  );
}

/*
 
The dance partners are:

Female dancer is : Allison and the male dancer is : Frank

Female dancer is : Cheryl and the male dancer is : Mason

Female dancer is : Jennifer and the male dancer is : Clayton

Female dancer is : Aurora and the male dancer is : Raymond   

There are 4 male dancers waiting to dance

 */
