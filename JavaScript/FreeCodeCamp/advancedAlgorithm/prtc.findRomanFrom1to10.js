let dataObj = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
//create a function to find romans by decreasing 1 number
let findRoman = (smallNum) => {
  let str = "",
    count = 0;
  while (smallNum != 0) {
    if (dataObj[smallNum]) {
      count = smallNum;
      str = dataObj[smallNum] + str;
      smallNum -= count;
    } else {
      count = 1;
      str = dataObj[count] + str;
      smallNum -= count;
    }
  }
  return console.log(str);
};

findRoman(3);
//III
findRoman(8);
//VIII
