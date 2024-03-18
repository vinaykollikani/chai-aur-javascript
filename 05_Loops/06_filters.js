// -------------------------
//        Filters JS
// -------------------------

/*
  Filter Method in JavaScript

  The filter() method creates a new array with all elements that pass the test implemented by the provided function.

  Syntax:
    array.filter(function(currentValue, index, array) {
      // return true if currentValue passes the test, otherwise false
    }, thisArg);

  Parameters:
    - function(currentValue, index, array): A function to test each element of the array.
      - currentValue: The value of the current array element being processed.
      - index (optional): The index of the current array element being processed.
      - array (optional): The array filter() was called upon.
    - thisArg (optional): Value to use as 'this' when executing the callback function.

  Example:
    Let's use filter() to filter out even numbers from an array.
*/

// Define an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter() to filter out even numbers
// const evenNumbers = numbers.filter(function (num) {
// 	return num % 2 === 0;
// });

// console.log("Filtered even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

/*
  Difference Between Filter and For Each

  - The forEach() method executes a provided function once for each array element.
  - The filter() method creates a new array with elements that pass the test implemented by the provided function.

  Example:
    Let's demonstrate the difference between filter() and forEach().
*/

// Using forEach() to print odd numbers
// console.log("Using forEach() to print odd numbers:");
// numbers.forEach(function (num) {
// 	if (num % 2 !== 0) {
// console.log(num);
// 	}
// });

// Using filter() to filter out odd numbers
// console.log("Using filter() to filter out odd numbers:");
// const oddNumbers = numbers.filter(function (num) {
// 	return num % 2 !== 0;
// });
// console.log("Filtered odd numbers:", oddNumbers);

// Define an array of products with prices
const products = [
	{ name: "Laptop", price: 800 },
	{ name: "Phone", price: 500 },
	{ name: "Tablet", price: 200 },
	{ name: "Smartwatch", price: 150 },
	{ name: "Headphones", price: 120 },
	{ name: "Camera", price: 300 },
];

// Using filter() to filter out products with a price higher than $100
const expensiveProducts = products.filter(function (product) {
	return product.price > 200;
});

// console.log("Expensive products:", expensiveProducts);

const books = [
	{ title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
	{ title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
	{ title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
	{ title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
	{ title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
	{ title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
	{ title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
	{ title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
	{ title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
	return bk.publish >= 1995; // && bk.genre === "History";
});
console.log(userBooks);

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
