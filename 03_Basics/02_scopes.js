let a = 700;
var b = 500;
if (true) {
	let a = 7;
	var b = 7;
	const c = 7;
	// console.log("A inner : " + a);
	// console.log("B inner : " + b);
	// A inner : 7
	// B inner : 7
}
// console.log("A outer : " + a);
// console.log("B outer : " + b);
// A outer : 700
// B outer : 7

function one() {
	const username = "hitesh";

	function two() {
		const website = "youtube";
		console.log(username);
	}
	// console.log(website);

	two();
}

// one()

if (true) {
	const username = "hitesh";
	if (username === "hitesh") {
		const website = " youtube";
		// console.log(username + website);
	}
	// console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
	return num + 1;
}

const addTwo = function (num) {
	return num + 2;
};
addTwo(5);

// console.log(a); // Block Scope Variable
// console.log(b); // Block Scope Variable
// console.log(c); // Global Scope Variable

// Global Scope:
// Variables declared outside of any function are globally scoped.
// They can be accessed from anywhere in your code, including inside and outside of functions.

// Block Scope (let and const):

// Introduced in ES6, let and const create block scope.
// A block is any code wrapped in curly braces {}, such as an if statement or a loop.
// Variables declared with let or const can only be accessed from within the block they are declared in.

// Using const:
// Use const when you know the value of a variable won't change.
// This makes your code more predictable and helps prevent accidental changes.

// Using let:
// Use let when you need to re-assign a variable within its scope.
// This is a good balance between flexibility and avoiding unintended global variables.

// Best Practices:
// In modern JavaScript, it's generally recommended to avoid using var and favor let or const for variable declarations.
// Using const by default helps prevent accidental re-assignment and makes your code clearer.
// Only use let when you specifically need to re-assign a variable.
