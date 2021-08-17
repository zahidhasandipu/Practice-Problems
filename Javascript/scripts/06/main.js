// // # Hoisting

// var x = 10;

// function getName() {
//   console.log("Welcome to JavaScript");
// }

// getName();
// console.log(x);

// getName();
// console.log(x);

// var x = 10;

// function getName() {
//   console.log("Welcome to JavaScript");
// }

// # How functions work
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 7;
//   console.log(x);
// }

// function b() {
//   var x = 10;
//   console.log(x);
// }

// # Window and this keyword

// var a = 10;
// function b() {
//   var x = 7;
// }

// console.log(window.a);
// console.log(a);
// console.log(this.a);

// # Scope chain and lexical environment

// function a() {
//   var b = 10;
//   console.log();
//   function c() {
//     console.log(b);
//   }
// }

// a();
