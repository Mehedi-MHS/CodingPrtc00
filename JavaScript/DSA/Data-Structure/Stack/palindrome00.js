//checking palindrome word/sentence/number using stack
//A palindrome is a word, phrase, or number that is spelled the same forward and back‐ward
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
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
function clear() {
  this.top = 0;
}
function length() {
  return this.top;
}
//end of constructor function

function isPalindrome(str) {
  var s = new Stack();
  var strLen = str.length; //my coding style
  for (var i = 0; i < strLen; ++i) {
    s.push(str[i]);
  }
  var reverseStr = "";
  while (s.length() > 0) {
    reverseStr += s.pop();
  }
  if (reverseStr == str) {
    return true;
  } else {
    return false;
  }
}

var word1 = "hello";
if (isPalindrome(word1)) {
  console.log(word1 + " is a palindrome");
} else {
  console.log(word1 + " is not a palindrome");
}

var word2 = "racecar";
if (isPalindrome(word2)) {
  console.log(word2 + " is a palindrome");
} else {
  console.log(word2 + " is not a palindrome");
}

//hello is not a palindrome
//racecar is a palindrome
