// -------------------------
//        REDUCE JS
// -------------------------

/*
  Reduce Method in JavaScript

  The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

  Syntax:
    array.reduce(function(accumulator, currentValue, index, array) {
      // return updated accumulator based on currentValue
    }, initialValue);

  Parameters:
    - function(accumulator, currentValue, index, array): A function to execute on each element in the array.
      - accumulator: The accumulated result of the previous iterations.
      - currentValue: The current element being processed in the array.
      - index (optional): The index of the current element being processed in the array.
      - array (optional): The array reduce() was called upon.
    - initialValue (optional): Initial value of the accumulator.

  Example:
    Let's use reduce() to calculate the sum of all numbers in an array.
*/

// Define an array
// const numbers = [1, 2, 3, 4, 5];

// // Using reduce() to calculate the sum
// const sum = numbers.reduce(function (accumulator, currentValue) {
// 	return accumulator + currentValue;
// }, 0);

// console.log("Sum:", sum); // Output: 15

/*
  Note:
  - The reduce() method iterates over each element in the array, updating the accumulator with the result of each iteration.
  - The initialValue parameter is optional. If provided, it is used as the initial value for the accumulator in the first iteration. If not provided, the first element of the array is used as the initial value.
*/

// Using arrow function syntax and omitting initialValue
// const product = numbers.reduce(
// 	(accumulator, currentValue) => accumulator * currentValue
// );
// console.log("Product:", product); // Output: 120

/*
  Example: Using reduce() with Objects

  The reduce() method can also be used with objects to transform their properties or calculate aggregated values.
*/

// Define an array of objects
const purchases = [
	{ item: "Laptop", price: 1000 },
	{ item: "Phone", price: 500 },
	{ item: "Tablet", price: 300 },
];

// Using reduce() to calculate the total price of all purchases
// const totalPrice = purchases.reduce(
// 	(total, purchase) => total + purchase.price,
// 	0
// );
// console.log("Total Price:", totalPrice); // Output: 1800

const shoppingCart = [
	{
		product: "iPhone 1",
		price: 19999,
	},
	{
		product: "iPhone 2",
		price: 29999,
	},
	{
		product: "iPhone 3",
		price: 39999,
	},
	{
		product: "iPhone 4",
		price: 49999,
	},
	{
		product: "iPhone 5",
		price: 59999,
	},
	{
		product: "iPhone 6",
		price: 69999,
	},
	{
		product: "iPhone 7",
		price: 79999,
	},
	{
		product: "iPhone 8",
		price: 89999,
	},
];

const cartPrice = shoppingCart.reduce((sum, num) => sum + num.price, 0);
console.log(cartPrice);


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
