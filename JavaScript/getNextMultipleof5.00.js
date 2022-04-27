//getting next multiple of 5
function getNext(num) {
  var lastDigit = num < 99 ? num % 10 : num % 100; //num%10 for range(0-99)[2 digit] and num%100 is for range(100-999)[3 digit]
  var diff = 5 - lastDigit > 0 ? 5 - lastDigit : 10 - lastDigit;
  return num + diff;
}
console.log(getNext(33)); //35
console.log(getNext(37)); //40
console.log(getNext(41)); //45
