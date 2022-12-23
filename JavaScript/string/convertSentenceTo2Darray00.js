let str = "I'm a BeauTiful Guy";
let strarr = str.split(" ");
let arr = [];
for (let i = 0; i < strarr.length; i++) {
  arr.push(strarr[i].split(""));
}
console.log(arr);

/*[
  [ 'I', "'", 'm' ],
  [ 'a' ],
  [
    'B', 'e', 'a',
    'u', 'T', 'i',
    'f', 'u', 'l'
  ],
  [ 'G', 'u', 'y' ]
]
*/
