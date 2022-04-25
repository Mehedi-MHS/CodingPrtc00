//Compare to short alphabetically
//Unsafe version
console.log(
  ["s", "t", "a", "c", "K", "o", "v", "E", "r", "f", "l", "W", "2", "1"].sort(
    (a, b) => {
      return a.localeCompare(b);
    }
  )
);

/*
 [
  '1', '2', 'a', 'c',                      
  'E', 'f', 'K', 'l',
  'o', 'r', 's', 't'
  ,
  'v', 'W'
]
*/

//Note: The above sort will throw an error if any array items are not a string. If you know that the array
// may contain items that are not strings use the safe version below.

//Safe version:convert everything to string
console.log(
  ["s", "t", "a", "c", "K", 1, "v", "E", "r", "f", "l", "o", "W"].sort(
    (a, b) => {
      return a.toString().localeCompare(b);
    }
  )
);
/*
 [
  1,   'a', 'c', 'E',              
  'f', 'K', 'l', 'o',
  'r', 's', 't', 'v',                    
  'W'
]
*/
