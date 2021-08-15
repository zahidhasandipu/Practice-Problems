/*Write a program that asks your name and age, stores it in a object and outputs the object in the console
HINT: Use prompt().*/

// let yourDetails = {
//   name: prompt("What is your name?"),
//   age: prompt("What is your age?"),
// };
// console.log(yourDetails);

/*Write a basic age calculator. It will ask your birth year using prompt() and show you how old you are. For example, if you write your birth year as 1995, it will show (2021 - 1995 = 26). Here 2021 should be dynamic.*/

// let birthYear = prompt("What is your birth year?");
// console.log(birthYear);
// var thisDate = new Date();
// currentYear = thisDate.getFullYear();
// console.log(currentYear);
// let yourAge = currentYear - birthYear;
// console.log(yourAge);

/*Write a program that prints out the multiplication table for 2 in the console. The expected output would be:
	2 x 1 = 2
	2 x 2 = 4
	2 x 3 = 6
	…
	2 x 10 = 20
	
You have to print upto 10 times (2 x 10 = 20).*/

// let i = 1;
// for (i = 1; i <= 10; i++) {
//   let multiplicationTable = 2 * i;
//   console.log(`2*${i} = ${multiplicationTable}`);
// }

/*Write a function named ‘isEven’ that takes a number as an input and returns ‘true’ if the number is even, ‘false’ otherwise. Please note, you don’t have to use prompt() here to get the ‘input’. You can just hardcode it.*/

// const number = 47;

// function isEven() {
//   if (number % 2 == 0) {
//     return "True";
//   } else {
//     return "False";
//   }
// }

// console.log(isEven(number));

/*Suppose, you are given this array [1, 5, 10, 12, 15, 20, 23]. Now write a program that will loop through the array and print out only the odd numbers. You should try to reuse the function from problem 4.*/

// var myArray = [1, 5, 10, 12, 15, 20, 23];

// function isEven() {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] % 2 !== 0) {
//       console.log(myArray[i]);
//     }
//   }
// }

// isEven();

/*Implement Bubble Sort algorithm using Javascript (If you’re not taught sorting algorithms yet, you can attempt this later)*/

//NA//

/*Create an object that is able to hold all your resume information. The object structure would exactly be like this (If you have some missing information, just make it up):
Name: string
Age: int
Education: Array of objects, Object structure { institute_name: string, year: string, degree: string }
Experience: Array of objects { company: string, title: string, years_active: string }
Address (Object):
Present Address { house_no, street, city}
Permanent Address { house_no, street, city}
Skills (Array of strings)

	Using the created object, you will print out exactly the same thing in the console:
	
	Hi, my name is (name). I am (age) years old. My present address is (present address street), (present address city). I took my (last degree) from (last institution). I am currently working in (company name) as a (title).
	
	HINT: You can use template literals to easily construct the above string: https://stackabuse.com/es6-template-string-literals-in-nodejs/
*/

// let myResume = {
//   Name: "Zahid Hasan Dipu",
//   Age: 26,
//   Education: {
//     Institute_name: "National University, San Diego",
//     Year: 2021,
//     Degree: "Masters",
//   },
//   Experience: {
//     Company: "Algorizin Inc.",
//     Title: "Full Stack Developer Intern",
//     Years_active: 1,
//   },
//   Address: {
//     Present_address: {
//       House_no: "Apt B",
//       Street: "15050 Via Hondonada",
//       City: "San Diego, California, 92129",
//     },
//     Permanent_address: {
//       House_no: "Hazi Alim Sharkar Bari",
//       Street: "Bhairabpur Uttar Para",
//       City: "Bhairab, Kishoreganj, 2350",
//     },
//   },
//   Skills: ["Thinker", "Organizer", "Time Sensetive"],
// };

// console.log(
//   `Hi, my name is ${myResume.Name}. I am ${myResume.Age} years old. My present address is ${myResume.Address.Present_address.Street}, ${myResume.Address.Present_address.City}. I took my ${myResume.Education.Degree} from ${myResume.Education.Institute_name}. I am currently working in ${myResume.Experience.Company} as a ${myResume.Experience.Title}.`
// );

/*Write a program using for loop that will print the following exact star pattern:
*
**
***
****
*****

HINT: In JS, you can join strings by using + sign. So for example, let a = ‘Hello’, then console.log(a + ‘ World’) would print ‘Hello World’*/

// let n = 5;
// space = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     space += "*";
//   }
//   space += "\n";
// }
// console.log(space);

/*Write a program using for loop that will print the following exact star pattern:
 *****
 ****
 ***
 **
 *
 
 
 
 
 
 
 
 
 */
// let n = 5;
// space = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 5; j >= i; j--) {
//     space += "*";
//   }
//   space += "\n";
// }
// console.log(space);

/*Write a function that takes height and weight as input and returns the BMI (Body Mass Index). If you don’t know about BMI, take the hard way and do a Google search on your own. The inputs need to be taken using a prompt() and then fed into the function as parameters.*/

// let weight = prompt("What is your weight in kilograms?");
// console.log("Weight : " + weight + " kg");
// let int_weight = parseInt(weight);

// let height = prompt("What is your height in meters?");
// console.log("Height : " + height + " meter");
// let int_height = parseInt(height);

// let squared_height = Math.pow(int_height, 2);
// let BMI = int_weight / squared_height;
// console.log("BMI : " + BMI);

/*Write a program isPrime() that can determine if a number is prime or not. If it is prime, it will return true, otherwise, false.*/

// function isPrime(x) {
//   d = x - 1;
//   while (d > 1) {
//     if (x % d == 0) return false;
//     d--;
//   }
//   return true;
// }
// console.log(isPrime(56));
