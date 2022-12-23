/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. 
*/
function titleCase(str) {
  let strarr = str.split(" ");
  let arr = [];
  //converting string to 2D array
  for (let i = 0; i < strarr.length; i++) {
    arr.push(strarr[i].split(""));
  }
  //console.log(arr);
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

  //changing the case of the alphabets

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (/[a-z]/.test(arr[i][0])) {
        arr[i][0] = arr[i][0].toUpperCase();
      } else if (j > 0 && /[A-Z]/.test(arr[i][j])) {
        arr[i][j] = arr[i][j].toLowerCase();
      }
    }
  }

  //console.log(arr);

  /*
 [
  [ 'I', "'", 'm' ],
  [ 'A' ],
  [
    'B', 'e', 'a',
    'u', 't', 'i',
    'f', 'u', 'l'
  ],
  [ 'G', 'u', 'y' ]
]
*/

  //Converting modified 2D array into string
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].join(""));
  }
  //console.log(newarr);
  //[ "I'm", 'A', 'Beautiful', 'Guy' ]

  let sentence = newarr.join(" ");
  return console.log(sentence);
  //I'm A Beautiful Guy
}

titleCase("I'm a little tea pot");
//I'm A Little Tea Pot

titleCase("sHoRt AnD sToUt");
//Short And Stout

titleCase("HERE IS MY HANDLE HERE IS MY STOUT");
//Here Is My Handle Here Is My Stout

/*
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/
