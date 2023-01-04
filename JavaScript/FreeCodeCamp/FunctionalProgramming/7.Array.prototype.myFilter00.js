/*
Implement the filter Method on a Prototype
You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

Tests
[23, 65, 98, 5, 13].myFilter(item => item % 2) should equal [23, 65, 5, 13].
["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi") should return ["naomi"].
[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) should return [1, 2, 5].
Your code should not use the filter method.
*/

Array.prototype.myFilter = function (callback) {
  let newArr = [],
    len = this.length;
  for (let i = 0; i < len; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log([23, 65, 98, 5, 13].myFilter((item) => item % 2));
//[ 23, 65, 5, 13 ]
console.log(
  ["naomi", "quincy", "camperbot"].myFilter((element) => element === "naomi")
);
//[ 'naomi' ]

console.log(
  [1, 1, 2, 5, 2].myFilter(
    (element, index, array) => array.indexOf(element) === index
  )
); //[ 1, 2, 5 ]);
