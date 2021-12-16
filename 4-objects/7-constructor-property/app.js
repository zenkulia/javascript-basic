// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person("john", "sanders");
// console.log(john.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = () => {};
console.log(sayHi.constructor);

const fajri = new john.constructor("fajri", "putra");
fajri.fullName();
