//Just used another method in dequeue() function

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.toString = toString;
}

function enqueue(data) {
  this.dataStore.push(data);
}

//constructor function for Patient object
function Patient(name, code) {
  this.name = name;
  this.code = code;
}

function dequeue() {
  var codes = [];
  var arrlen = this.dataStore.length;
  for (var j = 0; j < arrlen; ++j) {
    codes.push(this.dataStore[j].code);
  }
  var maxIndex = codes.indexOf(Math.max.apply(null, codes));

  return this.dataStore.splice(maxIndex, 1);
}

function toString() {
  var str = "";
  var arrLen = this.dataStore.length;
  for (var i = 0; i < arrLen; ++i) {
    str += this.dataStore[i].name + "- code:" + this.dataStore[i].code + "\n";
  }
  return str;
}

//Testing
var p = new Patient("John", 5);
var store = new Queue();
store.enqueue(p);
p = new Patient("Jennifer", 3);
store.enqueue(p);
p = new Patient("Alexa", 4);
store.enqueue(p);
p = new Patient("Edward", 1);
store.enqueue(p);
p = new Patient("Humbets", 5);
store.enqueue(p);
console.log("Total Patients:\n" + store.toString());
var seen = store.dequeue();
console.log("Patients being treated: " + seen[0].name);
console.log("Patients waitings to be seen:\n " + store.toString());

seen = store.dequeue();
console.log("Patients being treated: " + seen[0].name);
console.log("Patients waitings to be seen:\n " + store.toString());

seen = store.dequeue();
console.log("Patients being treated: " + seen[0].name);
console.log("Patients waitings to be seen:\n " + store.toString());

seen = store.dequeue();
console.log("Patients being treated: " + seen[0].name);
console.log("Patients waitings to be seen:\n " + store.toString());

/*
 Total Patients:
John- code:5
Jennifer- code:3
Alexa- code:4
Edward- code:1
Humbets- code:5

Patients being treated: John
Patients waitings to be seen:
 Jennifer- code:3
Alexa- code:4
Edward- code:1
Humbets- code:5

Patients being treated: Humbets
Patients waitings to be seen:
 Jennifer- code:3
Alexa- code:4
Edward- code:1

Patients being treated: Alexa
Patients waitings to be seen:
 Jennifer- code:3
Edward- code:1

Patients being treated: Jennifer
Patients waitings to be seen:
 Edward- code:1
*/
