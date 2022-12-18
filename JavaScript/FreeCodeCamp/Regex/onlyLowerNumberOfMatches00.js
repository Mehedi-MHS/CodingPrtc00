//Something{LowerNumber,}
let str = "Hello Helllllllo";
let regex = /Hel{3,}o/i;
console.log(str.match(regex));
/*
 [
  'Helllllllo',
  index: 6,
  input: 'Hello Helllllllo',
  groups: undefined
]
*/
