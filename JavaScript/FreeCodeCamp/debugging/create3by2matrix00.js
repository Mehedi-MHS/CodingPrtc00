//output: [[0,0],[0,0],[0,0]];
// m×n matrix(m row,n column)
function zeroMatrix(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    //m indicates rows
    for (let j = 0; j < n; j++) {
      //n indicates columns
      row.push(0);
    }

    newArray.push(row);
    row = []; //resets previous row values
  }

  return newArray;
}

let threeByTwo = zeroMatrix(3, 2);
console.log(threeByTwo);
//[ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

let threeByThree = zeroMatrix(3, 3);
console.log(threeByThree);
//[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
