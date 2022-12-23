let arr = [1, 2, 5, 7, 8, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 5) {
    arr.splice(i, 1);
    i--; //resetting index,because after removing element from array,
    //the index of the next elements are decreased (1).So i decreased (1) current index
  }
}

console.log(arr);

//[ 5, 7, 8 ]
