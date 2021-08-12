// // # Use conditional if statements

// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes! That was TRUE!";
//   }
//   return "No! That was FALSE!";
// }

// console.log(trueOrFalse(false));

// // # Comparison with equality operator

// function testEqual(val) {
//   if (val == 12) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testEqual(12));

// // # Comparison with strict equality operator

// function testEqual(val) {
//   if (val === "5") {
//     return "True";
//   }
//   return "Not Equal";
// }

// console.log(testEqual(5));

// // # Comparing different values

// function compareEquality(a, b) {
//   if (a === b) {
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(compareEquality(10, "10"));

// // # Comparing inequality operator

// function testNotEqual(val) {
//   if (val != 99) {
//     return "True";
//   }
//   return "False";
// }
// console.log(testNotEqual(10));
// console.log(testNotEqual(99));

// // # Comparison with greater than operator

// function testGreaterOrEqual(val) {
//   if (val >= 20) {
//     return "20 or Over";
//   }
//   if (val >= 10) {
//     return "10 or Over";
//   }
//   return "Less than 10";
// }

// console.log(testGreaterOrEqual(13));

// // # Comparison with less than or equal operator

// function testLessOrEqual(val) {
//   if (val <= 30) {
//     return "Under 30";
//   }
//   if (val <= 60) {
//     return "Under 60";
//   }
//   return "More than 60";
// }

// console.log(testLessOrEqual(44));

// // # Comparision with logical and operator

// function testLogicalAnd(val) {
//   if (val <= 50 && val >= 25) {
//     return "Yes";
//   }
//   return "No";
// }

// console.log(testLogicalAnd(39));

// // // # Comparision with logical or operator

// function testLogicalOr(val) {
//   if (val < 10 || val > 20) {
//     return "Outside";
//   }
//   return "Inside";
// }

// console.log(testLogicalOr(19));

// // # Else Statement

// function testElse(val) {
//   var result = "";

//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or smaller";
//   }
//   return result;
// }
// console.log(testElse(7));

// #Else if statement

// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// }

// console.log(testElseIf(11));

// // # Ordering of else if statement

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }

// console.log(orderMyLogic(7));

// // # Chaining if else statement

// function testSize(num) {
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else {
//     return "Huge";
//   }
// }

// console.log(testSize(19));
