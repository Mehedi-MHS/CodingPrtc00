let arr = ["I'm", "a", "beaUtifuL", "GUY"];
let len = arr.length;

for (let i = 0; i < len; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (/[a-z]/.test(arr[i][0])) {
      arr[i][0] = arr[i][0].toUpperCase();
    } else if (j > 0 && /[A-Z]/.test(arr[i][j])) {
      arr[i][j] = arr[i][j].toLowerCase();
    }
  }
}
arr[1][0] = arr[1][0].toUpperCase();
console.log(arr[1][0]);
