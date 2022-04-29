//Linked List (LList) data structure 00 -
//contains a short program that sets up a linked list of cities in western Arkansas that are located on Interstate 40

function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("Head"); //creating Head node by default
  this.find = find;
  this.insert = insert;
  //this.remove=remove; //it will be used in the next example
  this.display = display;
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
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

//testing program
var cities = new LList();
cities.insert("Conway", "Head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();
//Conway
//Russellville
//Alma
