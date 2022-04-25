//Using arrays inside objects to store data
//This example stores weekly high temperature  and returns average temperature
//There is also a method of adding new temperature

function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(tmp) {
  this.dataStore.push(tmp);
}
function average() {
  var total = 0;
  var dataLen = this.dataStore.length;
  for (var i = 0; i < dataLen; ++i) {
    total += this.dataStore[i];
  }
  return total / dataLen;
}

var thisWeek = new weekTemps();
thisWeek.add(55);
thisWeek.add(47);
thisWeek.add(48);
thisWeek.add(37);
thisWeek.add(41);
thisWeek.add(27);
thisWeek.add(25);
console.log(thisWeek.average()); //40
