let st1 = "Hel5#*+lo";
let len = st1.length;

let arr = [];

for (var i = 0; i < len; i++) {
  if (st1[i].match(/[a-zA-Z]/)) {
    arr.push(st1[i]);
  }
}

console.log(arr.join(""));
//Hello
