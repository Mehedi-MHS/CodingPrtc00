//Just practice only

//flattening object
var nestedArrObj = [
  { id: 1, value: "one" },
  { id: 2, value: "two" },
  { id: 3, value: "three" },
];

//ES5
var flattenArr1 = nestedArrObj.reduce(function (obj, current) {
  obj[current.id] = current.value;
  return obj;
}, {});
console.log(flattenArr1);
//{ '1': 'one', '2': 'two', '3': 'three' }

//ES6
var flattenArr2 = nestedArrObj.reduce(
  (obj, current) => Object.assign(obj, { [current.id]: current.value }),
  {}
);
console.log(flattenArr2);
//{ '1': 'one', '2': 'two', '3': 'three' }

//version >=7
var flattenArr3 = nestedArrObj.reduce(
  (obj, current) => ({ ...obj, [current.id]: current.value }),
  {}
);
console.log(flattenArr3);
//{ '1': 'one', '2': 'two', '3': 'three' }

//multidimensional array by me
var mdarr1 = [1, 2, ["hello", "world", [4, 5]], 6];
console.log(
  mdarr1
    .toString()
    .split(",")
    .map((value) => {
      return Number(value) ? Number(value) : String(value);
    })
);
//[ 1, 2, 'hello', 'world', 4, 5, 6 ]
