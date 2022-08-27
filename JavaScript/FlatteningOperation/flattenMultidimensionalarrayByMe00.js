//Flatten multidimensional array by me - 2 types of value - number, string

//multidimensional array by me
var mdarr1 = [1, 2, ["hello", "world", [4, 5]], 6];
console.log(
  mdarr1
    .toString()
    .split(",") //['1','2','hello','world','4','5','6'];
    .map((value) => {
      return Number(value) ? Number(value) : String(value);
    })
);
//[ 1, 2, 'hello', 'world', 4, 5, 6 ]
