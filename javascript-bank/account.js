/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
var _deposit = new Transaction('deposit', amount);
if (_deposit.amount > 0) {
  this.transactions.push(_deposit);
  return true;
  }
  else {
    return false;
  }
}

Account.prototype.withdraw = function(amount) {
  var _withdraw = new Transaction('withdraw', amount);
  if (_withdraw.amount > 0) {
    this.transactions.push(_withdraw);
    return true;
  }
  else {
    return false;
  }
}

Account.prototype.getBalance = function() {
  var deposits = 0;
  var withdraws = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
    deposits += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdraw') {
      withdraws += this.transactions[i].amount;
    }
  }
  var balance = deposits - withdraws;
  return balance;
}
