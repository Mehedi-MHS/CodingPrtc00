//To build a stack, we first need to decide on the underlying data structure we will use to
//store the stack elements. We will use an array in our implementation.

/*Intro:
 * dataStore - The array that stores the stack elements .The constructor sets it to an empty array.
 * top - The top variable keeps track of the top of the stack and is initially set to 0 by the constructor, indicating that the 0 position of the array is the top of the stack,at least until an element is pushed onto the stack.
 * push - When we push a new element onto a stack, we have to store it in the top position and increment the top variable so that the new top is the next empty position in the array.
 * pop - The pop() function does the reverse of the push() function—it returns the element in the top position of the stack and then decrements the top variable.
 * peek - The peek operation returns the value stored at the top of a stack without removing it from the stack.
 * clear - clear a stack. simply set top variable = 0
 * length - To know number of elements stored in stack
 */

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("John"); //Last in
console.log("length: " + s.length());
console.log("Peek: " + s.peek());
//length: 3
//Peek: John
var popped = s.pop(); //First out
console.log("Popped element: " + popped);
//Popped element: John
console.log(s.peek());
//Raymond
s.push("Cynthia");
console.log(s.peek());
//Cynthia
s.clear();
console.log("Length after clear: " + s.length());
//Length after clear: 0
console.log("Peek after clear: " + s.peek());
//Peek after clear: undefined
s.push("Clayton");
console.log(s.peek());
//Clayton
