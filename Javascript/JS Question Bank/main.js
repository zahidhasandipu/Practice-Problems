// var car = new Vehicle("Honda", "Red", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
// }

// Output:
// Vehicle {model: 'Honda', color: 'Red', year: '2010', country: 'UK'}

// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);

// Output:
// 1 'undefined' 'number'

// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();

// Output:
// A, C, B

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// function foo() {
//   return
//   {
//     message: "Hello World"
//   };
// }
// console.log(foo());

// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = [, , ,];
// console.log(array3);

// "use strict";

// function printNumbers(first, second, first) {
//   console.log(first, second, first);
// }
// printNumbers(1, 2, 3);

// const printNumbersArrow = (first, second, first) => {
//   console.log(first, second, first);
// };
// printNumbersArrow(1, 2, 3);

// console.log(Math.max());

// const numbers = new Set([1, 1, 2, 3, 4]);
// console.log(numbers);

// const browser = new Set("Firefox");
// console.log(browser);

// async function func() {
//   return 10;
// }
// console.log(func());
