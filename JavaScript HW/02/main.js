/*Write a program that takes 5 number inputs (prompt function) from users and stores it in the array. NOTE: The program has to be error-proof. The user can input anything including Strings, Numbers, Special Characters etc. Your job would be to ignore invalid values (optionally show an alert warning that the value is not a valid number) and only accept 5 numbers.
HINT: You might need to look into JavaScript sort function and also a few type checking functions
*/

// var userInput = [];

// for (let i = 0; i < 5; i++) {
//   firstInput = parseInt(prompt("Please enter 5 number here!"));
//   if (isNaN(firstInput)) {
//     alert("Hey, It's not a number!");
//     i--;
//   } else {
//     userInput.push(firstInput);
//   }
// }
// console.log(userInput);

// // Print out the min, max, median and average of the array.

// userInput.sort();
// let minValue = userInput[0];
// let maxValue = userInput[0];
// let medValue = userInput[2];
// let avgValue = userInput[0];

// for (var i = 1; i < userInput.length; i++) {
//   if (userInput[i] < minValue) {
//     minValue = userInput[i];
//   }
//   if (userInput[i] > maxValue) {
//     maxValue = userInput[i];
//   }
//   avgValue = avgValue + userInput[i];
// }
// avgValue = avgValue / userInput.length;

// console.log(minValue);
// console.log(maxValue);
// console.log(medValue);
// console.log(avgValue);

/*2.      Write a function that takes different parameters and creates a person object. The parameters would be:
-        Name
-        Height
-        Weight
-        BMI (initially null)
It would also contain a method to calculate BMI of the person if the BMI is currently null, and set the new BMI. And also, another function to compare BMI with another person.
Now, from user’s take inputs (prompt function) and create 2 persons. Show their individual BMI. And also demonstrate the compare function. The compare function should output something similar to this: “(Name1)’s BMI is greater than (Name2)’s”. Also, consider the fact that both BMI can be the same.
NOTE: You are restricted to use only Objects and Object methods. Avoid using any external function except the object constructor. */

//NA

/* 3. Create an array of student objects with around 5-6 students (hardcode it, no need to take user inputs), each student having the following attributes:
-        Name
-        Marks: Array
The objects should not contain any object methods, only name and marks. Your task is to find the brightest student of them all based on average marks. Consider the fact that multiple students might have the same average marks, in that case all of them would be considered brightest.
The outputs should be strictly like this:
Alice is the brightest student of them all
OR
Alice, John and Bob are the brightest students
Avoid code repetitions
NOTE TO TA: Please make sure that the program works correctly both for single brightest and multiple brightest students.*/
