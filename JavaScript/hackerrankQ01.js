//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

//getting next multiple of 5
function getNextMultiple(numarr) {
  var arr = numarr.map(function (num) {
    var lastDigit = num < 10 ? num : num <= 99 ? num % 10 : num % 100; //num%10 for range(0-99)[2 digit] and num%100 is for range(100-999)[3 digit]
    var diff = 5 - lastDigit > 0 ? 5 - lastDigit : 10 - lastDigit;

    var res = num >= 38 && diff < 3 ? num + diff : num;
    return res;
  });
  return arr;
}

var x = getNextMultiple([4, 73, 67, 38, 33]);
console.log(x);
//[ 4, 75, 67, 40, 33 ]
console.log(getNextMultiple([27, 55, 62, 36, 99]));
