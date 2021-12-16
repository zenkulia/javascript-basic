// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// saat menetapkan nilai tipe data primitif ke variabel, perubahan apa pun dibuat langsung ke nilai itu, tanpa memengaruhi nilai asli

// ketika menetapkan nilai tipe data non-primitif ke variabel dilakukan dengan referrence sehingga setiap perubahan akan mempengaruhi semua referrences.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: "bob" };
let person2 = { ...person };
person2.name = "susy";
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
