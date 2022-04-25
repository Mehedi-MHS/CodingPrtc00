//Assigning partners (in pair) in square dance 00

//Here we will use nodejs to read 'dancer.txt' file
const fs = require("fs");

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue; //push
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
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
//end of Queue constructor function

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(male, female) {
  var names = fs.readFileSync("dancers.txt", { encoding: "utf8" }).split("\n");
  //must control the sequence here.first read the file then performs other tasks

  var namesLength = names.length;

  for (var i = 0; i < namesLength; ++i) {
    names[i] = names[i].trim(); //trim removes leading(first) and trailing(last) whiteSpace and line break character from a string
  }
  for (var j = 0; j < namesLength; ++j) {
    var dancer = names[j].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == "F") {
      female.enqueue(new Dancer(name, sex)); //inserting female object in dataStore[]
    } else {
      male.enqueue(new Dancer(name, sex)); //inserting male object in dataStore[]
    }
  }
}

function dance(males, females) {
  console.log("Dance Partners Are :\n");
  while (!males.empty() && !females.empty()) {
    var person = females.dequeue();
    console.log("Female dancer is : " + person.name);
    person = males.dequeue();
    console.log("and male dancer is : " + person.name + "\n");
  }
}

//test program
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
  console.log(
    "Female dancer : " + femaleDancers.front().name + " is waiting to dance."
  );
}
if (!maleDancers.empty()) {
  console.log(
    "Male dancer :" + maleDancers.front().name + " is waiting to dance."
  );
}

/*
Dance Partners Are :

Female dancer is : Allison
and male dancer is : Frank

Female dancer is : Cheryl
and male dancer is : Mason

Female dancer is : Jennifer   
and male dancer is : Clayton

Female dancer is : Aurora
and male dancer is : Raymond

Male dancer :Bryan is waiting to dance.

*/
