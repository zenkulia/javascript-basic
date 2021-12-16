function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bobo", morning);
greet("peter", afternoon);

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - disimpan dalam variabel (expression), diteruskan sebagai argumen ke fungsi lain, kembali dari fungsi (closure)

// Higher Order function - menerima fungsi lain sebagai argumen atau mengembalikan fungsi lain sebagai hasilnya

// Callback Function - diteruskan ke fungsi lain sebagai argumen dan dieksekusi di dalam fungsi itu

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'susan';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
