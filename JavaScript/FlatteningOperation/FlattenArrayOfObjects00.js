//Flattening operation - Flatten Array of objects (from:JSNotesForProfssionals)

//version <= 5.1
var array = [
  { key: "one", value: 1 },
  { key: "two", value: 2 },
  { key: "three", value: 3 },
];

var flattenArray1 = array.reduce(function (obj, current) {
  obj[current.key] = current.value;
  return obj;
}, {});

console.log(flattenArray1);
//{ one: 1, two: 2, three: 3 }

//version >=6
var flattenArray2 = array.reduce(
  (obj, current) =>
    Object.assign(obj, {
      [current.key]: current.value,
    }),
  {}
);

console.log(flattenArray2);
//{ one: 1, two: 2, three: 3 }

//version >=7 [sometimes need babel plugin to support it in old devices]
var flattenArray3 = array.reduce(
  (obj, current) => ({ ...obj, [current.key]: current.value }),
  {}
);
console.log(flattenArray3);
//{ one: 1, two: 2, three: 3 }
