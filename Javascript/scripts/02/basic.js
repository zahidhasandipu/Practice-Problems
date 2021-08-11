// // # Access Multi-Dimensional Arrays

// var myArray = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
//   [[100, 110, 120], 130, 140],
// ];
// var myData = myArray[3][1]; //find 130
// console.log(myData);

// // # Adding array with push()

// var myArray = [1, 2, 3];
// myArray.push(4, 5, 6);
// console.log(myArray);

// // # Removing array with pop()

// var myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var removedFromMyArray = myArray.pop();
// console.log(myArray);

// // # Manupulating array with shift()
// var myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// var removedFromMyArray = myArray.shift(); // unshift is used for adding something at the beginning of an array

// console.log(myArray);

// // # Shopping List

// var myList = [
//   ["Watermelon", 1],
//   ["Milk", 2],
//   ["Banana", 8],
//   ["Strawberry", 1],
// ];
// console.log(myList);

// // # Writing Re-usable code with function

// function reUsableFunction() {
//   console.log("Hello World");
// }

// reUsableFunction();
// reUsableFunction();
// reUsableFunction();

// // # Passing values to functions with arguments

// function functionWithArgs(a, b) {
//   console.log(a + b);
// }
// functionWithArgs(20, 10);

// // # Global scope and functions

// var myGlobal = 10;

// function fun1() {
//   oopsGlobal = 5;
// }

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal:" + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal:" + oopsGlobal;
//   }
//   console.log(output);
// }

// fun1();
// fun2();

// // # Local scope and functions

// function myLocalScope() {
//   var myVar = 5;
//   console.log(myVar);
// }
// myLocalScope();

// // # Global vs Local scope in functions
// var outerWear = "Shirts";

// function myOutFit() {
//   var outerWear = "Sweters";

//   return outerWear;
// }

// console.log(myOutFit());
// console.log(outerWear);

// // # Return a value from a function with return

// function minusEight(num) {
//   return num - 6;
// }
// console.log(minusEight(7));

// # Undefined Value returned

// var sum = 3;
// function addFive() {
//   sum += 5;
// }
// console.log(addFive());

// // # Assignment with a returned value

// var changed = 0;
// function change(num){
//     return (num+5)/3;
// }

// changed = change(10);

// var processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }

// processed = processArg(3);
