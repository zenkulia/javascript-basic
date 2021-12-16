/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = 'Bank Of America';
}

const fajri = new Account("fajri", 200);
const putra = new Account("putra", 0);

Account.prototype.bank = "BCA";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
// console.log(john.bank);
console.log(putra);
console.log({});
console.log([]);
