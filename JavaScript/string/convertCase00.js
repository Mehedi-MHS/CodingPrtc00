let str = "I'm a huMan BeiNg";
let arr = str.split("");
let len = str.length;
for (let i = 0; i < len; i++) {
  if (/[A-Z]/.test(arr[i])) {
    arr[i] = arr[i].toLowerCase();
  } else if (/[a-z]/.test(arr[i])) {
    arr[i] = arr[i].toUpperCase();
  }
}

console.log(arr.join(" "));
//i ' M   A   H U m A N   b E I n G
