//Priority Queue
//Needs modification in dequeue() and toString() methods only.
//Priority Queue depends on dequeue()
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  //this.front=front;
  //this.back=back;
  this.toString = toString;
  // this.empty=empty;
}

function enqueue(elem) {
  this.dataStore.push(elem);
}

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

function dequeue() {
  var priority = this.dataStore[0].code;
  for (var i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < priority) {
      priority = i;
    }
  }
  return this.dataStore.splice(priority, 1);
}

function toString() {
  var str = "";
  var arrlen = this.dataStore.length;
  for (var i = 0; i < arrlen; ++i) {
    str += this.dataStore[i].name + " code:" + this.dataStore[i].code + "\n";
  }
  return str;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated : " + seen[0].name);
console.log("Patients waiting to be seen : " + ed.toString());
//another round
seen = ed.dequeue();
console.log("Patient being treated : " + seen[0].name);
console.log("Patients waiting to be seen : " + ed.toString());

//another round
seen = ed.dequeue();
console.log("Patient being treated : " + seen[0].name);
console.log("Patients waiting to be seen : " + ed.toString());

/*
 Smith code:5  
 Jones code:4     
 Fehrenbach code:6    
 Brown code:1        
 Ingram code:1
                                       

Patient being treated : Jones
Patients waiting to be seen : Smith code:5
Fehrenbach code:6
Brown code:1
Ingram code:1

Patient being treated : Ingram
Patients waiting to be seen : Smith code:5
Fehrenbach code:6
Brown code:1

Patient being treated : Brown
Patients waiting to be seen : Smith code:5
Fehrenbach code:6


 */
