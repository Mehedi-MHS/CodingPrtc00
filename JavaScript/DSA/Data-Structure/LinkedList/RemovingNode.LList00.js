//Linked List : Removing node feature (find LList.readme.txt for more details)

function Node(element) {
  this.element = element;
  this.next = null; //default value
}
function LList() {
  this.head = new Node("Head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious; //helper function for remove operation .it finds the just before node of the to be removed node
  this.remove = remove;
}

function find(item) {
  var currNode = this.head; //always start finding from head node
  while (currNode.element != item) {
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

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element); //not used currNode.element to ignore head node
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next; //next node of prevNode now changed to next node of item. we are just skipping over the node we want to remove
  }
}

//testing remove function
var cities = new LList();
cities.insert("Conway", "Head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");

cities.display();

cities.remove("Carlisle");
console.log(); //line break
cities.display();
/*
 Conway          
 Russellville
 Carlisle       
 Alma

 Conway
 Russellville      
 Alma
*/
