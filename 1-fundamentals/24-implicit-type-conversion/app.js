// Implicit Type Conversion

// const name = "ALFAJRI PUTRA";
// const lastName = "PRATAMA";
// const fullName = name + " " + lastName;
// console.log(fullName); // output ALFAJRI  PUTRA PRATAMA

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result); // output 14

// const value = name - lastName;
// console.log(value); // output NaN (Not a Number)

// let number3 = 10;
// let number4 = 23;
// // 100 lines
// number4 = "23";
// const result2 = number3 + number4;
// console.log(result2); // ouput 1023 dikarnakan value yang dideklarasikan bentuk String.

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  // value = parseInt(value); // output, value yang diinputkan ditambahkan dengan value dari randomNumber
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value); // output yang dihasilkan digabungkan (String) dengan nilai inputan
});
