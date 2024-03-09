//! Functions in JavaScript
// ? Functions :
// Functions are reusable blocks of code that perform a specific task and optionally return a value.
// They promote code organization, modularity, and reusability.

// ? Function Definition & Calling:

//* Method 1
// function functionName(parameter1, parameter2, ...) {
//   // Function body containing statements to be executed
//   return value; // Optional: return a value
// }

// ? Example :
function printName(fullName) {
	console.log(`Name is : ${fullName}`);
}
// printName("Jarvish");

// * Method 2
const printAge = function (age) {
	console.log(`Age is : ${age}`);
};
// printAge(23);

// ! Function Examples :

// * Even or Odd
const evenNumberCheck = function (num) {
	if (num % 2 === 0) {
		console.log(`${num} is even`);
	} else {
		console.log(`${num} is odd`);
	}
};
// evenNumberCheck(7);

// * Numbers Sum
const numbersSum = function (num1, num2) {
	return num1 + num2;
	const sum = num1 + num2;
	return sum;
};
// console.log(numbersSum(7, 18));

// * Objects and Functions
const userDetails = {
	fullName: "Jarvish Dev",
	userID: "R21IT081",
	branch: "Information Technology",
};
function displayUser(objectFunction) {
	console.log(`
	User Name : ${objectFunction.fullName}\n
	User Id : ${objectFunction.userID}\n
	Branch : ${objectFunction.branch}\n`);
}
// displayUser(userDetails);

// Rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// Converts into Array.

function sum(...theArgs) {
	// let total = 0;
	// for (const i of theArgs) {
	// 	total += i;
	// }
	// return total;
	return theArgs;
}

console.log(sum(1, 2, 3)); // [ 1, 2, 3 ]
// Expected output: 6

console.log(sum(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]
// Expected output: 10

//? Key Points:
// Functions can be called multiple times with different arguments.
// Arguments passed to the function become local variables accessible within the function body.
// The return statement is used to exit the function and optionally provide a value.
// Functions can call other functions, promoting code modularity.
// Function Expressions:

// Arrow Functions:

// A concise way to define functions:

// JavaScript
// const add = (x, y) => x + y;

// console.log(add(5, 3)); // Output: 8
// Function Scope:

// Variables declared within a function are local to that function and cannot be accessed from outside.
// Global variables are accessible from anywhere in the script, but their use is discouraged due to potential naming conflicts and maintainability issues.
// Conclusion:

// Functions are essential for structuring and organizing code in JavaScript. They improve code reusability, readability, and maintainability. By understanding function definitions, arguments, return values, and scope, you can effectively leverage functions to create well-structured and efficient JavaScript applications.
