//Reverse string
//By me

let str = "Hello";
let len = str.length;
let tmp = "";
for (let i = len - 1; i >= 0; i--) {
  tmp += str[i];
}

console.log(tmp);

//olleH
