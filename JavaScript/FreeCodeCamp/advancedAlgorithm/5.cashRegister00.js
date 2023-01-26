/*
 Cash Register:
 =============

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
Tests:
------
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

*/

function checkCashRegister(price, cash, cid) {
  let currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let change = cash - price,
    newArr = [],
    cidLen = cid.length;
  const constChange = cash - price;
  //calculate cash money
  let cashTotalMoney = cid
    .reduce((previous, current) => {
      return previous + current[1];
    }, 0)
    .toFixed(2);
  let removeZeroItem = (arr) => {
    let len = arr.length,
      newArr2 = [];
    for (let i = 0; i < len; i++) {
      if (arr[i][1] != 0) {
        newArr2.push(arr[i]);
      }
    }
    return newArr2;
  };

  let sortArr = (arr) => {
    return arr.sort((a, b) => {
      return b[1] - a[1];
    });
  };
  //reverse Loop
  if (cashTotalMoney >= constChange) {
    for (let i = cidLen - 1; i >= 0; i--) {
      if (cid[i][1] >= 0 && change > 0) {
        //convert change to 2 decimal number
        change = Number(change.toFixed(2));
        let availableMoneyCount = cid[i][1] / currency[cid[i][0]];
        let needsMoneyCount = Math.floor(change / currency[cid[i][0]]);
        if (availableMoneyCount < needsMoneyCount) {
          change -= cid[i][1];
          newArr.unshift(cid[i]);
        } else if (availableMoneyCount > needsMoneyCount) {
          change -= needsMoneyCount * currency[cid[i][0]];
          newArr.unshift([cid[i][0], needsMoneyCount * currency[cid[i][0]]]);
        } else if (availableMoneyCount == needsMoneyCount) {
          change -= cid[i][1];
          newArr.unshift(cid[i]);
        }
      } else {
        continue;
      }
    }
  }

  let status_text =
    cashTotalMoney == constChange
      ? "CLOSED"
      : cashTotalMoney < constChange || change != 0
      ? "INSUFFICIENT_FUNDS"
      : "OPEN";

  return console.log({
    status: status_text,
    change:
      status_text == "INSUFFICIENT_FUNDS"
        ? []
        : status_text == "OPEN"
        ? sortArr(removeZeroItem(newArr))
        : sortArr(newArr),
  });
}

///end of function
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
//{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
/*
{
  status: 'OPEN',
  change: [
    [ 'TWENTY', 60 ],
    [ 'TEN', 20 ],
    [ 'FIVE', 15 ],
    [ 'ONE', 1 ],
    [ 'QUARTER', 0.5 ],
    [ 'DIME', 0.2 ],
    [ 'PENNY', 0.04 ]
  ]
}
*/

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

/*
 */

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
/**/

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
/**/
