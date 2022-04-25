//Problem solving using stack class data structure
//Multiple Base Conversion (binary,decimal,octal)- this algorithm only supports 2-9 base conversion. Hexadecimal(16) is not supported
//convert a number from one base to another base

/* Solving algorithm:class 11-22 ict book theory
 * =========================== ========= ========= ========= ======== ======== =====
 * Given a number 'n' and base 'b' to convert in it.
 * The rightmost digit of n is n % b. Push this digit onto the stack.
 * Replace n with n / b.
 * Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
 * Build the converted number string by popping the stack until the stack is empty.
 */

//First we have to create stack class

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(elem) {
  this.dataStore[this.top++] = elem;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

//end of stack class constructor //

function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base); //pushing remainder
    num = Math.floor((num /= base)); //in every loop,number will be divided bu base
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

var num1 = 32, //decimal number
  base1 = 2; //convert to binary
var binary = mulBase(num1, base1);
console.log("decimal: " + num1 + "\nbinary: " + binary);
//decimal: 32
//binary: 100000
var num2 = 125,
  base2 = 8;
var octal = mulBase(num2, base2);
console.log("Decimal: " + num2 + "\nOctal: " + octal);
//Decimal: 125
//Octal: 175

/*cons
 * cannot convert binary to decimal as base is restricted to 2-9, cannot use 10 for decimal
 * and 16 for Hexadecimal
 */
