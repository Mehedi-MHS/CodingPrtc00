/*
*arr.splice(start_index,span_number(howManyElementsShouldBeRemoved),values_separated_by_comma)
*The splice() method adds new items to an array.
*/

let fruits1=["Apple","Banana","Mango"];
fruits1.splice(2,0,"Guava","JackFruit");
console.log(fruits1);
// ["Apple","Banana","Guava","JackFruit","Mango"]

let fruits2=["Apple","Banana","Mango"];
fruits2.splice(1,2,"Guava","JackFruit"); //As span value set to 2, 2 items after the index[1] will be removed 
console.log(fruits2);
// ["Apple","Guava","JackFruit"]; 


let fruits3=["Apple","Banana","Mango"];
fruits3.splice(0,1); //span value set to 1, so 1 value will be removed after the index
console.log(fruits3); 
// ["Banana","Mango"]




