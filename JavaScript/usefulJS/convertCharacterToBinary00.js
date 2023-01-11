/*
 Convert Character to binary:
 ============================

 algorithm:
 i) convert the character to decimal using .charCodeAt()
 ii) then convert the decimal to binary
 */

function convertToBinary(str) {
  let strArr = str.split(""),
    len = strArr.length,
    resultArr = [];

  let decimalToBin = (dec) => {
    let num = dec,
      remainder,
      quotient,
      bin = [];
    while (quotient != 0) {
      quotient = parseInt(num / 2);
      remainder = num % 2;
      bin.push(remainder);
      num = quotient;
    }
    return bin.reverse().join("");
  };

  for (let i = 0; i < len; i++) {
    let decimal = strArr[i].charCodeAt(0);
    resultArr.push(decimalToBin(decimal));
  }
  return console.log(resultArr.join(","));
}

convertToBinary("Hello!");
//1001000,1100101,1101100,1101100,1101111,100001
