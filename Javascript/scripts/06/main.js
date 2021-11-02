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

// var myArray1 = [10, 20, 30, 40, 50];
// var myArray2 = myArray1;
// console.log(myArray2);

// for (var i = 0; i < 4; i++) {
//   console.log(myArray1[i]);
//   console.log(myArray2[i]);
// }

// var myArray = ["First", "Second"];
// console.log(myArray);
// console.log(myArray.length);

// 2. Access (Index Into) an Array Item

// var myArray = ["First", "Second"];
// myArray.push("Third");
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// const a = ["first", "second", "third", "fourth"];
// const a1 = a.slice();
// console.log(a1);
// a.splice(0, 1);
// console.log(a);

// const myArray = [3, 5, 8, 2, 3, 99, 34, 6, 8, 1];
// myArray.sort();
// console.log(myArray);

// const myArray = [3, 5, 8, 2, 3, 99, 34, 6, 8, 1];
// let i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]);
//   i++;
// }

// const myArray = [3, 5, 8, 2, 3, 99, 34, 6, 8, 1];
// for (let i = 0; myArray.length; i++) {
//   console.log(myArray.indexOf(3));
// }

//const
// const PI = 3.14;
// PI = 1;
// console.log(PI);

//let
// console.log(i);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

//var

// for (var j = 0; j < 5; j++) {
//   console.log(j);
// }
// console.log(j);

// function myFunc() {
//   var someVar = "Pants";
//   console.log(someVar);
// }
// myFunc();

// console.log(someVar);

//Closures

// function myFunc() {
//   var myName = "Zahid";
//   function yourFunction() {
//     console.log(myName);
//   }
//   yourFunction();
// }
// myFunc();

// console.log(definedLater);
// var definedLater;
// definedLater = "I am defined";
// console.log(definedLater);
