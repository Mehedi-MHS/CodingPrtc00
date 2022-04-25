//Search in the whole array for a
//specific value -> jsNotesForprofessionals

var people = [
  { id: 1, name: "John", age: 54 },
  { id: 2, name: "Doe", age: 33 },
  { id: 3, name: "Jane", age: 43 },
];
//we will search for a name which contains 'J'
var result = people.filter((obj) => {
  var flag = false;
  Object.values(obj).forEach((val) => {
    if (String(val).indexOf("J") > -1) {
      flag = true;
      return;
    }
  });
  if (flag) {
    return obj;
  }
});
/*Here 'obj' indicates each of the single object in array
 * 'val' for values of every single object
 * Object.values() is es6 method
 */
console.log(result);

//[ { id: 1, name: 'John', age: 54 }, { id: 3, name: 'Jane', age: 43 } ]

//Same thing using old js version by me.

var result2 = people.filter(function (obj) {
  var flag = false;
  Object.entries(obj).forEach(function (val) {
    if (String(val).indexOf("J") > -1) {
      flag = true;
      return;
    }
  });
  if (flag) {
    return obj;
  }
});
console.log(result2);
//[ { id: 1, name: 'John', age: 54 }, { id: 3, name: 'Jane', age: 43 } ]
