//6 ways to convert a string into array

let str = "Hello world";

//process 1: split()

console.log(str.split(""));
//['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

//process 2: ...spreadOperator

console.log([...str]);
//['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

//Process 3: Array.from(str)
console.log(Array.from(str));
//['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

//Process 4: Object.assign([],str)  it is used in deep copy
console.log(Object.assign([], str));
//['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

//Process 5: for of loop (old method)

let ch = [];
for (let character of str) {
  ch.push(character);
}
console.log(ch);
//['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

//Process 6: Array.prototype.slice.call(string);

console.log(Array.prototype.slice.call(str));
//['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']
