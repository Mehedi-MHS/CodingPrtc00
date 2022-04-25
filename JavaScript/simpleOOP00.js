//From O'reilly DSA book
function Checking(amount) {
  this.balance = amount; //property
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  amount > 0
    ? (this.balance = amount)
    : console.log("Can't deposit negative balance!");
}

function withdraw(amount) {
  amount <= this.balance
    ? (this.balance -= amount)
    : console.log("Insufficient balance!");
}

function toString() {
  return "Balance:" + this.balance;
}

var account = new Checking(500);
account.deposit(-300);
console.log(account.toString());
account.deposit(1000);
console.log(account.toString());
account.withdraw(300);
console.log(account.toString());
account.withdraw(5000);
