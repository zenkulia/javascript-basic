// find - Mengembalikan nilai elemen pertama dalam array di mana predikatnya benar, dan tidak ditentukan sebaliknya.
// returns single instance - (in this case object)

// great for getting unique value

const people = [
  { name: "al", age: 20, position: "developer", id: 1 },
  { name: "fajri", age: 25, position: "designer", id: 2 },
  { name: "putra", age: 30, position: "the boss", id: 3 },
  { name: "pratama", age: 35, position: "the boss", id: 4 },
];
const names = ["bob", "peter", "susy"];
console.log(
  names.find((name) => {
    return name === "zelda"; // undefined
  })
);

const person = people.find((person) => {
  return person.id === 2;
});

console.log(person.name);

const person2 = people.filter((person) => {
  return person.id === 3;
});

console.log(person2[0].name); // putra
