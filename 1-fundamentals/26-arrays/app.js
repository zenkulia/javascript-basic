// Arrays, Functions and Objects
// Arrays - [], index dimulai dari 0

const friend1 = "alfajri";
const friend2 = "putra";
const friend3 = "pratama";

const friends = ["whempi", "ibnu", "andri", "demong", 45, undefined, null];
friends[4] = friend1; // output alfajri
friends[5] = friend2; // output putra
friends[6] = friend3; // output pratama

console.log(friends); // output whempi, ibnu, andri, demong, alfajri, putra, pratama

console.log(friends[4]); // output alfajri
console.log(friends[5]); // output susy

let bestFriend = friends[6];
console.log(bestFriend); // output bob
