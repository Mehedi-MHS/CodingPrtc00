// Object.keys(object) returns an array, containing all the keys of the given object

let obj = {
  Alan: {
    age: 33,
    online: true,
  },
  Bejos: {
    age: 21,
    online: false,
  },
  Chris: {
    age: 44,
    online: true,
  },
};

console.log(Object.keys(obj));
//[ 'Alan', 'Bejos', 'Chris' ]
