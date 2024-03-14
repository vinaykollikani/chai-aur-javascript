/*
  Iteration Loops in JavaScript

  In JavaScript, iteration loops are used to execute a block of code repeatedly. There are several types of iteration loops available:

  1. for Loop
  2. while Loop
  3. do...while Loop
  4. for...in Loop
  5. for...of Loop

  Let's explore each of these loops with examples:
*/

// 1. for Loop:
/*
  The 'for' loop repeats a block of code a specified number of times.
  Syntax:
    for (initialization; condition; iteration) {
      // code block to be executed
    }
*/

console.log("Output of for loop:");
for (let i = 0; i < 5; i++) {
	console.log(i); // Outputs 0, 1, 2, 3, 4
}

// 2. while Loop:
/*
  The 'while' loop repeats a block of code while a specified condition is true.
  Syntax:
    while (condition) {
      // code block to be executed
    }
*/

console.log("Output of while loop:");
let j = 0;
while (j < 5) {
	console.log(j); // Outputs 0, 1, 2, 3, 4
	j++;
}

// 3. do...while Loop:
/*
Syntax:
The 'do...while' loop is similar to the 'while' loop, but it always executes the block of code at least once before checking the condition.
    do {
      // code block to be executed
    } while (condition);
*/

console.log("Output of do...while loop:");
let k = 0;
do {
	console.log(k); // Outputs 0, 1, 2, 3, 4
	k++;
} while (k < 5);

// 4. for...in Loop:
/*
The 'for...in' loop iterates over the enumerable properties of an object.
Syntax:
    for (variable in object) {
      // code block to be executed
    }
*/

console.log("Output of for...in loop:");
const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
	console.log(prop); // Outputs 'a', 'b', 'c'
}

// 5. for...of Loop:
/*
  The 'for...of' loop iterates over iterable objects (arrays, strings, maps, sets, etc.).
  Syntax:
    for (variable of iterable) {
      // code block to be executed
    }
*/

console.log("Output of for...of loop:");
const arr = [1, 2, 3];
for (let element of arr) {
	console.log(element); // Outputs 1, 2, 3
}

/*
  For Each Loop in JavaScript

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
    Let's iterate over an array and print each element along with its index using forEach().
*/

// Define an array
const colors = ["red", "green", "blue"];

// Using forEach() to print each element and index
console.log("Output of forEach loop:");
colors.forEach(function (color, index) {
	console.log("Index:", index, "Color:", color);
});

/*
  Output:
  Index: 0 Color: red
  Index: 1 Color: green
  Index: 2 Color: blue
*/

// You can also use arrow function syntax for the callback function
console.log("Output of forEach loop with arrow function:");
colors.forEach((color, index) => {
	console.log("Index:", index, "Color:", color);
});

/*
  Output:
  Index: 0 Color: red
  Index: 1 Color: green
  Index: 2 Color: blue
*/

// The optional 'thisArg' parameter can be used to specify the context ('this') for the callback function
// Here, 'this' will refer to the object 'example'
const example = {
	greeting: "Hello",
	printColor: function (color) {
		console.log(this.greeting, color);
	},
};

console.log("Output using thisArg in forEach loop:");
colors.forEach(example.printColor, example);

/*
Output:
  Hello red
  Hello green
  Hello blue
*/

// Note: The forEach() method does not mutate the array on which it is called.
