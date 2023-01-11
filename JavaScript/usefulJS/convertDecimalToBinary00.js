// Two way's of converting decimal to binary

//way 1:
//=======
function convertToBinary1(decimal) {
  return console.log(decimal.toString(2));
}

convertToBinary1(6);
//110
convertToBinary1(10);
//1010

//Way 2:
//=======

function convertToBinary2(decimal) {
  let num = decimal,
    quotient,
    remainder,
    binary = [];
  while (quotient != 0) {
    quotient = parseInt(num / 2);
    remainder = num % 2;
    binary.push(remainder);
    num = quotient;
  }
  return console.log(binary.reverse().join(""));
}

convertToBinary2(6);
//110
convertToBinary2(10);
//1010
