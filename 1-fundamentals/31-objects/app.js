// Arrays, Functions and Objects
// Objects - key/value pairs  methods
// dot notation

const person = {
  name: "alfajri putra",
  lastName: "pratama",
  age: 19,
  education: false,
  married: true,
  siblings: ["whempi", "ibnu", "andri"],
  greeting() {
    console.log(`Hello my name is ${person.siblings[0]}`);
  },
};

const age = person.age;
console.log(age);
person.name = "katip";
console.log(person.name);
console.log(person.siblings[1]);
person.greeting();
