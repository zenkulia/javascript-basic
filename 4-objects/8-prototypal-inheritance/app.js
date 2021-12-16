/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const fajri = new Account("fajri", 200);
const putra = new Account("putra", 0);

Account.prototype.bank = "BCA";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(fajri.bank);
console.log(putra);

fajri.deposit(300);
putra.deposit(1000);
