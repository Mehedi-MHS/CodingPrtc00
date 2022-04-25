/*From:O'reilly data structure and algorithms:page-35
basic-use:
*use lists, particularly if we only have a few items to
store in list form. Lists are especially useful if we don’t have to perform searches on the
items in the list or put them into some type of sorted order. When we need to perform
long searches or complex sorts, lists become less useful, especially with more complex
data structures.
*/

function List() {
  this.listSize = 0;
  // this.pos = 0;
  this.dataStore = [];
  // this.clear = clear;
  this.find = find;
  this.toString = toString;
  // this.insert = insert;
  this.append = append;
  this.remove = remove;
  //  this.front = front;
  // this.end = end;
  //  this.prev = prev;
  // this.next = next;
  this.length = length;
  // this.currentPos = currentPos;
  // this.moveTo = moveTo;
  // this.getElement = getElement;
  // this.contains = contains;
}


//Append: adding an element to a list

function append(element) {
  this.dataStore[this.listSize++] = element;
}

//Find: finding an element in a list

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

//Remove: removing an element from a list

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

//Length: determining the number of elements in a list

function length() {
  return this.listSize;
}

//toString: retrieving a List's element
//Strictly speaking, this function returns an array object and not a string, but its utility is
//in providing a view of the current state of an object, and just returning the array works
//adequately for this purpose.

function toString() {
  return this.dataStore;
}


var names = new List();
names.append("John");
names.append("Doe");
names.append("Kiosk");
console.log(names.toString().join(",")); //converting array to string
// "John,Doe,Kiosk"
names.remove("John");
console.log(names.toString().join(",")); // converting array to string
//"Doe,Kiosk"


//next>> list-01.js