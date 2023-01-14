/*
Roman Numeral Converter:
========================

Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

Tests:
=======
convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX
*/

function convertToRoman(num) {
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

  if (dataObj[num]) {
    return console.log(num, "-", dataObj[num]);
  } else {
    //convert number into array
    let numArr = num.toString().split(""),
      numArrLen = numArr.length;
    let resultStr = "";
    for (let i = 0; i < numArrLen; i++) {
      //reverse index (length-i)
      let decimalPlace = 10 ** i;
      let currentNum = numArr[numArrLen - (i + 1)] * decimalPlace; //current Number and its decimal place
      let divider = 10 ** (currentNum.toString().length - 1);
      while (currentNum != 0) {
        if (dataObj[currentNum]) {
          resultStr = dataObj[currentNum] + resultStr;
          currentNum = 0;
        } else {
          resultStr = dataObj[divider] + resultStr;
          currentNum -= divider;
        }
      }
    }
    return console.log(num, "-", resultStr);
  }
}

convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(400);
convertToRoman(500);
convertToRoman(501);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(186);

/*
 2 - II
3 - III
4 - IV
5 - V
9 - IX
12 - XII
16 - XVI
29 - XXIX
44 - XLIV
45 - XLV
83 - LXXXIII
97 - XCVII
97 - XCVII
99 - XCIX
400 - CD
500 - D
501 - DI
798 - DCCXCVIII
891 - DCCCXCI
1000 - M
1004 - MIV
1006 - MVI
1023 - MXXIII
1023 - MXXIII
2014 - MMXIV
186 - CLXXXVI*/
