//something{exactNumber}
let str = "Hello Helllo Hellllllo";
let regex = /Hel{2}o/;
console.log(str.match(regex));
/*
 [
  'Hello',
  index: 0,
  input: 'Hello Helllo Hellllllo',
  groups: undefined
]
*/
