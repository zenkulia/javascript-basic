// map
// tidak mengembalikan array baru
// tidak mengganti ukuran dari array aslinya
// menggunakan nilai dari array asli ketika membuat yang baru

const people = [
  { name: "al", age: 20, position: "developer" },
  { name: "fajri", age: 25, position: "designer" },
  { name: "putra", age: 30, position: "the boss" },
  { name: "pratama", age: 35, position: "the boss" },
];

const ages = people.map((person) => {
  return person.age + 20;
});
const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map((person) => {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");

console.log(names);
