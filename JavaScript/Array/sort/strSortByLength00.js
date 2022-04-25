//String short by length (Longest first)
let result = ["Apple", "Banana", "Egg", "JackFruit", "WaterMelons"].sort(
  (a, b) => {
    return b.length - a.length;
  }
);
console.log(result);
/*
 [ 'WaterMelons', 'JackFruit', 'Banana', 'Apple', 'Egg' ]

 */

//String short by length(Shortest first)
var res = ["Apple", "Banana", "Egg", "JackFruit", "WaterMelons"].sort(
  (a, b) => {
    return a.length - b.length;
  }
);
console.log(res);
/*
 [ 'Egg', 'Apple', 'Banana', 'JackFruit', 'WaterMelons' ]
 */
