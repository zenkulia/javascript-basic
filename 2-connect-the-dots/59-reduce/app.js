// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current <iter></iter>ation/value

const people = [
  { name: "al", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "fajri", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "putra", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "pratama", age: 35, position: "the boss", id: 4, salary: 500 },
];

const total = people.reduce((acc, currItem) => {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary; // acc + currItem.salary
  return acc;
}, 500);

console.log(total);
