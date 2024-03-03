// EXAMPLE 1 - Add Leading Zeros to a Number in JavaScript

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

console.log(padWithLeadingZeros(3, 2)); // 👉️ "03"
console.log(padWithLeadingZeros(3, 3)); // 👉️ "003"
console.log(padWithLeadingZeros(3, 4)); // 👉️ "0003"
console.log(padWithLeadingZeros(100, 2)); // 👉️ "100"

// 👇️ Alternatively, simply use the Addition (+) operator
const num = '00' + 3;
console.log(num); // 👉️ "003"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Always padding the number with a specific number of leading zeros

// const num = 123;

// const str = String(num);

// // ✅ pad number with 2 leading zeros
// console.log(str.padStart(str.length + 2, '0'));

// // ✅ pad number with 3 leading zeros
// console.log(str.padStart(str.length + 3, '0'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Padding negative numbers with leading zeros

// function addLeadingZeros(num, totalLength) {
//   if (num < 0) {
//     const withoutMinus = String(num).slice(1);
//     return '-' + withoutMinus.padStart(totalLength, '0');
//   }

//   return String(num).padStart(totalLength, '0');
// }

// console.log(addLeadingZeros(3, 2)); // 👉️ "03"
// console.log(addLeadingZeros(-3, 3)); // 👉️ "-003"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Pad a number with leading zeros using the addition (+) operator

// const positive = '00' + 5;
// console.log(positive); // 👉️ "005"

// const negative = '-' + '00' + String(-5).slice(1);
// console.log(negative); // 👉️ "-005"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function

// function padWithLeadingZeros(num, n) {
//   const char = '0';

//   return char.repeat(n) + num;
// }

// const num = 123;

// console.log(padWithLeadingZeros(num, 2)); // 👉️ 00123
// console.log(padWithLeadingZeros(num, 3)); // 👉️ 000123
// console.log(padWithLeadingZeros(num, 4)); // 👉️ 0000123

// ------------------------------------------------------------------

// // EXAMPLE 6 - Pad a number with Leading Zeros using a `while` loop

// function padWithZero(num, targetLength) {
//   let str = String(num);

//   while (str.length < targetLength) {
//     str = '0' + str;
//   }

//   return str;
// }

// const num = 5;

// // ✅ pad with 2 leading zeros
// console.log(padWithZero(num, String(num).length + 2)); // 👉️ '005'

// // ✅ pad with 3 leading zeros
// console.log(padWithZero(num, String(num).length + 3)); // 👉️ '0005'

// // ✅ pad with 4 leading zeros
// console.log(padWithZero(num, String(num).length + 4)); // 👉️ '00005'
