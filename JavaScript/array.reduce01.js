//ex:01:flatten array of objects
//The example below shows how to flatten an array of objects into a single object.

var array = [
  { key: "one", value: 1 },
  { key: "two", value: 2 },
  { key: "three", value: 3 },
];

var obj = array.reduce(function (obj, current) {
  obj[current.key] = current.value;
  return obj;
}, {});
console.log(obj);
//{ one: 1, two: 2, three: 3 }
