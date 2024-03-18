// ---------------------------
//        FOR EACH LOOP
// ---------------------------
/*
  forEach() Method in JavaScript

  The forEach() method is used to execute a provided function once for each array element. It is a concise way to iterate over arrays in JavaScript.

  Syntax:
    array.forEach(function(currentValue, index, array) {
      // code block to be executed
    }, thisArg);

  Parameters:
    - function(currentValue, index, array): A function to execute for each element in the array.
      - currentValue: The value of the current array element being processed.
      - index (optional): The index of the current array element being processed.
      - array (optional): The array forEach() was called upon.
    - thisArg (optional): Value to use as 'this' when executing the callback function.

  Example:
    Let's use forEach() to iterate over an array and print each element.
*/

// Define an array
const numbers = [1, 2, 3, 4, 5];

// Using forEach() to print each element
console.log("Using forEach() to iterate over array elements:");
numbers.forEach(function (num) {
	console.log(num); // Output: 1, 2, 3, 4, 5
});

/*
  Different Callback Functions Used with forEach()

  - The callback function passed to forEach() can have different signatures to achieve various functionalities.

  1. Callback function without index and array parameters:
    - It only takes the currentValue parameter.
  
  2. Arrow function as a callback:
    - Arrow functions can be used as callback functions for forEach().
  
  3. Using thisArg parameter:
    - You can specify the value of 'this' to be used within the callback function.

  Example:
    Let's demonstrate the usage of different callback functions with forEach().
*/

// 1. Callback function without index and array parameters
console.log(
	"Using forEach() with a callback function without index and array parameters:"
);
numbers.forEach(function (num) {
	console.log(num * 2); // Output: 2, 4, 6, 8, 10
});

// 2. Arrow function as a callback
console.log("Using forEach() with an arrow function as a callback:");
numbers.forEach((num) => {
	console.log(num + 1); // Output: 2, 3, 4, 5, 6
});

// 3. Using thisArg parameter
const obj = {
	multiplier: 10,
	multiply: function (num) {
		console.log(num * this.multiplier);
	},
};

console.log("Using thisArg parameter with forEach():");
numbers.forEach(obj.multiply, obj);

/*
  Output:
  10, 20, 30, 40, 50
*/

const programmingLanguages = [
	{
		languageName: "JavaScript",
		languageExtension: ".js",
	},
	{
		languageName: "Python",
		languageExtension: ".py",
	},
	{
		languageName: "C++",
		languageExtension: ".cpp",
	},
	{
		languageName: "Java",
		languageExtension: ".java",
	},
];

// programmingLanguages.forEach(function (language) {
// 	console.log(
// 		`"${language.languageName}" has a file extension "${language.languageExtension}"`
// 	);
// });

const myArray = ["javascript", "python", "java", "ruby", "Swift", "cpp"];

// Using Function Keyword
// myArray.forEach(function (key) {
// console.log(key);
// console.log(`${key.toUpperCase()} : ${key.length}`);
// console.log(`${key.toLocaleLowerCase()} : ${key.length}`);
// });

// // Using Arrow Function
// myArray.forEach((key) => {
// console.log(`${key} : ${key.length}`);
// });
// myArray.forEach((key, index, array) => {
// console.log(`${key.toUpperCase()} at Index : ${index} in Array : ${array}`);
// });

// Using Function Reference
// function printMe(key) {
// 	console.log(key.toUpperCase());
// }
// const printMe = (value) => {
// 	console.log(value.toLowerCase());
// };
// myArray.forEach(printMe);
