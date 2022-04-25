//There are 2 ways to create new array from existing array.
//concat() function allow you to put together 2 or morre arrays
//splice() function allow you to create a new array as a subset of existing array

/* splice(startingPosition,numberOfElements);
 * splice(start) ->gets the values after the position
 * */

var arr = ["Apple", "Mango", "Banana", "JackFruit", "John", "Doe", "Jennifer"];

var fruits = arr.splice(0, 4);
console.log("Fruits:" + fruits);
console.log("Persons:" + arr);

/*
Fruits:Apple,Mango,Banana,JackFruit
Persons:John,Doe,Jennifer
*/

var arr2 = ["Apple", "Mango", "Banana", "JackFruit", "John", "Doe", "Jennifer"];

var persons2 = arr2.splice(4);
console.log(persons2); //[ 'John', 'Doe', 'Jennifer' ]
