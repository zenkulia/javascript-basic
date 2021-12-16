// Array Properties and Methods
let names = ["alfajri", "putra", "pratama", "subagio", "iyoe"];

//length
// console.log(names.length);
// console.log(names[names.length - 1]);

// concat
const lastNames = ["watermelon", "Apel", "Strawberry"];
const allNames = names.concat(lastNames);
console.log(allNames); // menggabungkan dua array diatas atau lebih.

// // reverse
// console.log(allNames.reverse()); // mulai dari array terakhir

//unshift
//

// shift
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames); // menghapus element dari array pertama

// push;
// allNames.push("Mango");
// console.log(allNames); // Menambahkan elemen baru ke array, dan mengembalikan panjang array yang baru.

//pop
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames); // menghapus elemen terakhir dari array, dan mengembalikan panjang array yang baru.

// splice - mutates original array
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames); //menghapus elemen dari array, jika perlu, menyisipkan elemen baru ditempatnya, dan mengembalikan elemen yang dihapus.

// 0 adalah index yang ingin dihapus dari array, dan 3 adalah jumlah array yang ingin dihapus.
