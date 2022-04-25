//Implementing class based queue

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue; //insertion
  this.dequeue = dequeue; //deletion
  this.front = front; //returns first element
  this.back = back; //returns last element
  this.toString = toString;
  this.isEmpty = isEmpty;
}

function enqueue(data) {
  this.dataStore.push(data);
}

function dequeue() {
  this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  var arrlen = this.dataStore.length;
  for (var i = 0; i < arrlen; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

function isEmpty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

var q = new Queue();
q.enqueue("Jennifer");
q.enqueue("Cynthia");
q.enqueue("Meredith");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

/*
 
Jennifer
Cynthia
Meredith

Cynthia                              
Meredith
                               
Front of queue: Cynthia
Back of queue: Meredith

*/
