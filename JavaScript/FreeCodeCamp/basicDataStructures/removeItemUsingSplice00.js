//splice has 3 parameters,but we will use 2 parameters
// splice(index,numberOfElementsToDelete)
// splice returns an array containing the deleted items

let arr = ["Apple", "Banana", "Cucumber", "Dragon"];
let deletedArray = arr.splice(2, 2);
console.log(arr);
console.log(deletedArray);
