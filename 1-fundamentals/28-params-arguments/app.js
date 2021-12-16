// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined
const alfajri = "Alfajri";
const putra = "Putra";
const pratama = "Pratama";

function greet(name, second) {
  console.log(second);

  console.log("Hello there " + name);
}

greet("terdapat 3 nilai dibawah");

greet(putra, `${alfajri}`);
greet(pratama);
