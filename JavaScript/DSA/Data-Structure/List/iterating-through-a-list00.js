//Iterating through a list. For loop using list methods

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.find = find;
  this.append = append;
  this.insert = insert;
  this.remove = remove;
  this.clear = clear;
  this.toString = toString;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.getElement = getElement;
  this.moveTo = moveTo;
  this.contains = contains;
}


function append(element) { //append element to the end of the list
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  var dataLength = this.dataStore.length;
  for (var i = 0; i < dataLength; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}


function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function toString(){
  return this.dataStore.join(","); //some modification by me -> converted array to string separeted by comma (",")
}

function length(){
  return this.listSize;
}

//insert element in a specific position
function insert(element,after){ 
  var insertPos=this.find(after);
  if(insertPos > -1){
    this.dataStore.splice(insertPos+1,0,element);
    ++this.listSize;
    return true;
  }
  return false;
}

//Clear: removing all elements from a list
function clear(){
  delete this.dataStore; //deletes yhe dataset array
  this.dataStore=[]; //creates an empty array
  this.listSize=this.pos=0;
}

//Contains: determining if a given value is in list
function contains(element){
  var datalength=this.dataStore.length;
  for(var i=0;i<datalength;++i){
    if(this.dataStore[i]==element){
      return true;
    }
  }
  return false;
}

//Traversing a list.(Traversing similar as Traveling,movement(forward,backward))

function front(){
  this.pos=0;
}

function end(){
  this.pos=this.listSize-1;
}

function prev(){
  if(this.pos>0){
    --this.pos;
  }
}

function next(){
  if(this.pos<this.listSize-1){
    ++this.pos;
  }
}

function currPos(){
  return this.pos;
}

function moveTo(position){
  this.pos=position;
}

function getElement(){
  return this.dataStore[this.pos];
}

//end of definition

//starting execution
var names=new List();
names.append("One");
names.append("Two");
names.append("Three");
names.append("Four");
names.append("Five");
/*Another way to append:
let arr=["Apple","Mango","Banana"];
for(var i=0;i<arr.length;++i){
  names.append(arr[i]);
}
*/

console.log(names.length());

var i=0;
for(names.front();names.currPos() < names.length();names.next()){
  console.log(names.getElement());
	if(i>10){
		break;
	}
	i++;
}





