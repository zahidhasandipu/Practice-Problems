// // # Golf Code

// var names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else {
//     return names[6];
//   }
// }
// console.log(golfScore(5, 4));

// // #Switch statement

// {
//   let name = prompt("Type your name here!");
//   switch (name) {
//     case "Zahid":
//       console.log("You're welcome");
//       break;
//     case "Luin":
//       console.log("You're also welcome");
//       break;
//     default:
//       console.log("You're not welcome");
//       break;
//   }
// }

// // # Returning Boolean values from functions

// function isLess(a, b) {
//   return a < b;
// }
// console.log(isLess(10, 15));

// // # Build JS Objects

// var myDog = {
//   name: "Shepherd",
//   legs: 4,
//   tails: 1,
// };

// console.log(myDog);

// # Accessing object properties with dot notation, bracket notation.

// var myHat = {
//   size: 12,
//   color: "white",
//   "fabric type": "cotton",
// };

// var hatValue = myHat.size; //accessing property of an object
// console.log(hatValue);

// var hatValue = myHat["fabric type"];
// console.log(hatValue);

// // # Accessing object properties with variables

// var testObj = {
//   12: "NY",
//   24: "TX",
//   36: "CA",
// };

// var stateNumber = 24;
// var state = testObj[stateNumber];

// console.log(state);

// // # Adding & Deleting properties from an object

// var myDog = {
//   name: "Shepherd",
//   legs: 4,
//   tails: 1,
// };

// myDog.eyes = 2;
// console.log(myDog);

// delete myDog.legs;
// console.log(myDog);
