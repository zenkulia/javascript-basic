// Global Scope vs Local Scope
// variabel apa pun di luar blok kode {} dikatakan Global Scope
// dapat diakses di mana saja dalam program
// Gotchas : name collisions, modify by mistake

let name = "bobo";
name = "peter";

function calculate() {
  // some other code...
  console.log(name);
  name = "orange";
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
  inner();
}
calculate();

if (true) {
  // some other code...
  console.log(name);
  name = "pants";
}

console.log(`my name is ${name} and I'm awesome`);
