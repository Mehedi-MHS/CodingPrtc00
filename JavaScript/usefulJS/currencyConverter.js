//Code is from Jisanur Haques code

function convertToBDT(price) {
  const value = parseFloat(price).toLocaleString("bn-BD");
  return value;
}

const USDprice1 = 100.1;
const BDTprice1 = convertToBDT(USDprice1);
console.log(BDTprice1);
