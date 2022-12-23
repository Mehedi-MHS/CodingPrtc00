//return the longest word length of a string

//process 1:
let str = "a quick brown fox jumped over the lazy dog";
let arr = str.split(" ");
let lengthArr = arr.map((word) => {
  return word.length;
});
console.log(lengthArr);
//[ 1, 5, 5, 3, 6,4, 3, 4, 3]
let maxLength = Math.max.apply(null, lengthArr);
console.log(maxLength);
//6

//Process 2: loop
let strArr = [],
  reverseArr = [];
for (let ch in str) {
  strArr.push(ch);
}

for (let i = strArr.length - 1; i > 0; i--) {
  reverseArr.push(strArr[i]);
}
console.log(reverseArr.join(""));
