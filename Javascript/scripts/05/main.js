// // # Iterate with while loops

// var myArray = [];
// var i = 0;
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray);

// // # Iterate with for loops

// var myArray = [];
// for (var i = 0; i < 5; i++) {
//   myArray.push(i);
// }
// console.log(myArray);

// // # Iterate odd numbers with for loop

// var myArray = [];
// for (var i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }
// console.log(myArray);

// // # Count backwards with a for loop

// var myArray = [];
// for (var i = 10; i > 0; i -= 2) {
//   myArray.push(i);
// }

// console.log(myArray);

// // # Iterate through an array with a for loop

// var myArray = [10, 20, 30, 40];
// var total = 0;
// for (var i = 0; i < myArray.length; i++) {
//   total += myArray[i];
// }
// console.log(total);

// # Nested for loops

// function multiplyAll(myArray) {
//   var product = 1;
//   for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//       product *= myArray[i][j];
//     }
//   }
//   return product;
// }

// var product = multiplyAll([
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8],
// ]);

// console.log(product);

// // # Do while loop

// var myArray = [];
// var i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);

// console.log(i, myArray);

// // # Generate random fractions

// function randomFraction() {
//   return Math.random();
// }
// console.log(randomFraction());

// # Use parseInt function (takes a string and returns an integer)

// function convertToInteger(str) {
//   return parseInt(str);
// }
// convertToInteger("4");

// # Difference between var and let(When you declare var it is declared globally or locally if declared inside function, however, let is limited to block statement that is declared in)

// var catName = "Tobby";
// var quote;
// var catName = "Riko";

// function catTalk() {
//   catName = "Miles";
//   quote = catName + "says Meow!";
// }
// catTalk();

// // # Arrow functions to write concise anonymous functions

// var magic = function () {
//   return new Date();
// };
// console.log(magic);

// /*Updated function*/
// const magic = () => new Date();

// // # Arrow functions with parameters

// var myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));

// # Wrtie higher order arrow functions (Need to practice more)

// const realNumberArray = [4, 5.6, -9.8, 3.14, 43, 6, 8.34, -2];

// const squareList = (arr) => {
//   const squaredIntegers = arr
//     .filter((num) => Number.isInteger(num) && num > 0)
//     .map((x) => x * x);
// };

// const squaredIntegers = squareList(realNumberArray);

// console.log(squaredIntegers);

// //Higher order arrow functions

// const increment = (function () {
//   return function increment(number, value = 1) {
//     return number + value;
//   };
// })();

// console.log(increment(5, 2));
// console.log(increment(5));
