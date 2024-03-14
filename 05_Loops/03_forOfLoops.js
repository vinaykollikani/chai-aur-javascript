/*
  For...of Loop in JavaScript

  The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It provides a simpler syntax compared to traditional for loops.

  Syntax:
    for (variable of iterable) {
      // code block to be executed
    }

  Example:
    Let's use a for...of loop to iterate over an array of numbers and print each number.
*/

// Array iteration
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t For Of Loop : Array");
console.log("----------------------------------------------------------------");
const numbers = [1, 2, 3, 4, 5];
console.log("Using for...of loop to iterate over an array:");
for (const num of numbers) {
	console.log(num); // Output: 1, 2, 3, 4, 5
}

// String iteration
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t For Of Loop : String");
console.log("----------------------------------------------------------------");
const str = "hello";
console.log("Using for...of loop to iterate over a string:");
for (const char of str) {
	console.log(char); // Output: 'h', 'e', 'l', 'l', 'o'
}

// Map iteration
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t For Of Loop : Map");
console.log("----------------------------------------------------------------");
const myMap = new Map([
	["a", 1],
	["b", 2],
	["c", 3],
]);
console.log("Using for...of loop to iterate over a Map:");
for (const [key, value] of myMap) {
	console.log(key, ":", value); // Output: 'a' 1, 'b' 2, 'c' 3
}

// Set iteration
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t For Of Loop : Sets");
console.log("----------------------------------------------------------------");
const mySet = new Set([1, 2, 3]);
console.log("Using for...of loop to iterate over a Set:");
for (const item of mySet) {
	console.log(item); // Output: 1, 2, 3
}

/*
Note:
  - The for...of loop can only be used with objects that are iterable, i.e., those that have a Symbol.iterator property.
  - It does not work with plain objects because they are not iterable by default.
  - It does not provide access to the index of the elements like the traditional for loop does.
*/

// Custom iterable object example
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t For Of Loop : Object");
console.log("----------------------------------------------------------------");
const myIterable = {
	[Symbol.iterator]: function* () {
		yield 1;
		yield 2;
		yield 3;
	},
};

console.log("Using for...of loop to iterate over a custom iterable object:");
for (const num of myIterable) {
	console.log(num); // Output: 1, 2, 3
}

// ----------------------------------------------------------------

// for of

["", "", ""][({}, {}, {})];

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
	console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
	console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
	console.log(key, ":-", value);
}

const myObject = {
	game1: "NFS",
	game2: "Spiderman",
};

for (const [key, value] of myObject) {
	console.log(key, ":-", value);
}
