//Exercise:02 • page 72 • My solution
//Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  // this.length=length;
}

function enqueue(el) {
  this.dataStore.push(el);
}

function dequeue() {
  return this.dataStore.shift();
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str) {
  var q = new Queue();
  var strlen = str.length;
  for (var i = strlen - 1; i >= 0; --i) {
    q.enqueue(str[i]);
  }
  var reverseStr = "";
  while (!q.empty()) {
    reverseStr += q.dequeue();
  }

  var flag = str.toLowerCase() == reverseStr.toLowerCase() ? true : false;

  return `str:${str} - reverseStr:${reverseStr} - palindrome:${flag}`;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Hello"));

/*
 str:madam - reverseStr:madam - palindrome:true    
 str:Hello - reverseStr:olleH - palindrome:false

 */
