const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = myNumbers.map((num) => {
	return num + 7;
});
console.log(newNumbers);

// -------------------------
//         MAPS JS
// -------------------------

/*
  Map Method in JavaScript

  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

  Syntax:
    array.map(function(currentValue, index, array) {
      // return a new element based on currentValue
    }, thisArg);

  Parameters:
    - function(currentValue, index, array): A function to execute on each element in the array.
      - currentValue: The current element being processed in the array.
      - index (optional): The index of the current element being processed in the array.
      - array (optional): The array map() was called upon.
    - thisArg (optional): Value to use as 'this' when executing the callback function.

  Example:
    Let's use map() to double each number in an array.
*/

// Define an array
// const numbers = [1, 2, 3, 4, 5];

// Using map() to double each number
// const doubledNumbers = numbers.map(function (num) {
// 	return num * 2;
// });

// console.log("Doubled numbers:", doubledNumbers); // Output: [2, 4, 6, 8, 10]

/*
  Note:
  - The map() method does not mutate the original array, instead it returns a new array with the modified elements.
  - It is commonly used for transforming data in arrays, such as applying calculations or formatting.
*/

// Using arrow function syntax
// const squaredNumbers = numbers.map((num) => num ** 2);
// console.log("Squared numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

/*
  Example: Using map() with Objects

  The map() method can also be used with objects to transform their properties.
*/

// Define an array of objects
const people = [
	{ name: "John", age: 30 },
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 35 },
];

// Using map() to extract names from objects
// const names = people.map((person) => person.name);
// console.log("Names:", names); // Output: ["John", "Alice", "Bob"]

// Using map() to add greetings to names
// const greetings = people.map((person) => `Hello, ${person.name}!`);
// console.log("Greetings:", greetings); // Output: ["Hello, John!", "Hello, Alice!", "Hello, Bob!"]

const mapValue = myNumbers
	.map((val) => val * 100)
	.map((val) => val + 111)
	.filter((val) => val >= 500);
console.log(mapValue);

// ----------------------------------------------------------------
//			Difference between Filter(), Maps(), and Reduce()
// ----------------------------------------------------------------
/*
  Comparison of Filter, Map, and Reduce Methods in JavaScript

  Filter, map, and reduce are three common array methods in JavaScript used for data manipulation.

  Filter:
  - Creates a new array with elements that pass a specified condition.
  - Does not change the original array.
  
  Map:
  - Creates a new array by applying a function to each element of the original array.
  - Returns a new array with the same length as the original.
  
  Reduce:
  - Executes a reducer function on each element of the array, resulting in a single output value.
  - Can be used to transform, aggregate, or combine data from an array.

  Example:
    Let's demonstrate the difference and implementation of filter, map, and reduce methods in a single mini project.
*/

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter: Select even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

// Map: Double each number
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Reduce: Calculate the sum of all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // Output: 55

// Implementation of all three methods in a mini project: Calculate total price of items with discount

// Define an array of items with prices
const items = [
	{ name: "Laptop", price: 1000 },
	{ name: "Phone", price: 500 },
	{ name: "Tablet", price: 300 },
];

// Apply a 10% discount using map
const discountedPrices = items.map((item) => ({
	...item,
	price: item.price * 0.9,
}));

// Filter out items with a price greater than 400
const affordableItems = discountedPrices.filter((item) => item.price <= 400);

// Calculate the total price of affordable items using reduce
const totalPrice = affordableItems.reduce(
	(total, item) => total + item.price,
	0
);

console.log("Total Price of Affordable Items (with 10% discount):", totalPrice);
