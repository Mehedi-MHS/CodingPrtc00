//https://leetcode.com/problems/add-two-numbers/
//Q: given 2 list of numbers l1=2→4→3],l2=[5→6→4],now calculate their sum in reverse order (342+465=807),then output the result in reverse order [7,0,8]
//Trying to make something like this by me.

function Node(element, next) {
  this.element = element == undefined ? 0 : element;
  this.next = next == undefined ? null : next;
}

function LList() {
  this.head = new Node("Head");
  this.find = find;
  this.insertAfter = insertAfter;
  this.display = display;
  this.convertToArray = convertToArray;
}

function find(item) {
  var current = this.head;
  while (current.element != item) {
    current = current.next;
  }
  return current;
}

function insertAfter(newElement, item) {
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

function display() {
  var current = this.head;
  while (!(current.next == null)) {
    console.log(current.next.element);
    current = current.next;
  }
}

function convertToArray() {
  var current = this.head;
  var arr = [];
  while (!(current.next == null)) {
    arr.push(current.next.element);
    current = current.next;
  }
  return arr;
}

var l1 = new LList();
l1.insertAfter(2, "Head");
l1.insertAfter(4, 2);
l1.insertAfter(3, 4);
l1.display(); //2,4,3

var l2 = new LList();
l2.insertAfter(5, "Head");
l2.insertAfter(6, 5);
l2.insertAfter(4, 6);

l2.display(); //5,6,4

//var twoSum = function adsTwoSum(l1, l2) {};
