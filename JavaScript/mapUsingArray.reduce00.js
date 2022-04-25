//This code is for understanding only
//use original map function

function map(list, fn) {
  return list.reduce(function (newList, item) {
    return newList.concat(fn(item));
  }, []);
}
var x = map([1, 2, 3, 4], function (n) {
  return n * n;
});
console.log(x);
//[ 1, 4, 9, 16 ]
