let str = "aaHello, World!aa";
let regex = /[^a*].*[^a*$]/; //not starts with any occurances of 'a' and nor ends with any occurances of 'a'
let result = str.match(regex);
console.log(result);

/*
 [
  'Hello, World!',
  index: 2,
  input: 'aaHello, World!aa',
  groups: undefined
]
 */
