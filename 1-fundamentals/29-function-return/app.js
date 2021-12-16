// Arrays, Functions and Objects
// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm
const wallHeight = 50;
const wallWidth = 300;

function calculate(value) {
  // const newValue = value * 2.54;
  return value * 2.54;
  // console.log("hello");
  // console.log("hello");
  // console.log("hello");
}

// calculate(200);
const width = calculate(wallWidth);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

// calculate value diatas
let x = wallWidth; // width
let y = 2.54; // return value

let z = wallHeight; // wallheight
let c = 2.54; // return value

console.log(x * y);
console.log(z * c);
