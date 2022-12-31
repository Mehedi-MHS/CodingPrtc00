/*
 Array.prototype.map() or simply map() donot 
 modifies the original array (donot mutes the original array)
 
 The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.
*/

let users = [
  { name: "John", age: 32 },
  { name: "Doe", age: 36 },
  { name: "Jennifer", age: 22 },
];

//extract the names from objects inside array
const names = users.map((user) => user.name);
console.log(names);
//[ 'John', 'Doe', 'Jennifer' ]
