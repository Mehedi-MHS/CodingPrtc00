/*
Combine an Array into a String Using the join Method:
======================================================
The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

const arr = ["Hello", "World"];
const str = arr.join(" ");
str would have a value of the string Hello World.

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

Tests:
===========
Your code should use the join method.
Your code should not use the replace method.
sentensify("May-the-force-be-with-you") should return a string.
sentensify("May-the-force-be-with-you") should return the string May the force be with you.
sentensify("The.force.is.strong.with.this.one") should return the string The force is strong with this one.
sentensify("There,has,been,an,awakening") should return the string There has been an awakening. 
*/

function sentensify(str) {
  let arr = str.split(/\W/);
  return console.log(arr.join(" "));
}

sentensify("May-the-force-be-with-you");
//May the force be with you
