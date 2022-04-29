var l1 = [2, 4, 3],
  l2 = [5, 6, 4];

function addTwo(l1, l2) {
  var num1 = l1.reverse().join("");
  var num2 = l2.reverse().join("");
  var sum = Number(num1) + Number(num2);
  var arrSum = sum.toString().split("").reverse();
  arrSum = arrSum.map(function (a) {
    return Number(a);
  });
  return arrSum;
}

console.log(addTwo(l1, l2));
/*
 * 342+465=807
 * result: [7,0,8]
 */
