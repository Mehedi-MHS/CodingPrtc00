//Linked List - Practice only
function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("Head");
  this.find = find;
  this.findPrevious = findPrevious;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

var cities = new LList();
cities.insert("Bashundhora", "Head");
cities.insert("Motijheel", "Bashundhora");
cities.insert("Maijdee", "Motijheel");
cities.insert("Nilkhet", "Maijdee");

cities.display();

//as maijdee is not not a city of Dhaka, we are removing it
cities.remove("Maijdee");
console.log(); //line break

cities.display();

/*
 Bashundhora   
 Motijheel
 Maijdee
 Nilkhet
            
 Bashundhora
 Motijheel 
 Nilkhet
 */
