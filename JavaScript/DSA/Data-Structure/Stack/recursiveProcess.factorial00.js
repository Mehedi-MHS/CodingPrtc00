//Stack is also used to simulate recursive process
//getting factorial number is an example of recursive process.

/*
 To simulate computing 5! using a stack, first push the numbers 5 through 1 onto a stack.
 Then, inside a loop, pop each number and multiply the number by the running product,
 resulting in the correct answer, 120.
*/

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  //this.peek=peek;//removed unnecessary methods for this factorial calculation
  //this.clear=clear;
  this.length = length;
}
function push(elem) {
  this.dataStore[this.top++] = elem;
}
function pop() {
  return this.dataStore[--this.top];
}
function length() {
  return this.top;
}
//end of constructor function

function fact(num) {
  var s = new Stack();
  while (num > 1) {
    s.push(num--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log("Factorial of 5 =" + fact(5));
//Factorial of 5 =120
