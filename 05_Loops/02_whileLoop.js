/*
  While Loop in JavaScript

  The 'while' loop in JavaScript is used to execute a block of code as long as a specified condition is true.

  Syntax:
    while (condition) {
      // code block to be executed
    }

  Example:
    Let's use a while loop to print numbers from 1 to 5.
*/
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t While Loop in JavaScript");
console.log("----------------------------------------------------------------");
let i = 1;
console.log("Using while loop:");
while (i <= 5) {
	console.log("Iteration : " + i); // Output: 1, 2, 3, 4, 5
	i++;
}

/*
  Do While Loop in JavaScript

  The 'do...while' loop is similar to the 'while' loop, but it always executes the block of code at least once before checking the condition.

  Syntax:
    do {
      // code block to be executed
    } while (condition);

  Example:
    Let's use a do...while loop to print numbers from 1 to 5.
*/
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t Do While Loop in JavaScript");
console.log("----------------------------------------------------------------");
let j = 1;
console.log("Using do...while loop:");
do {
	console.log(j); // Output: 1, 2, 3, 4, 5
	j++;
} while (j <= 5);

/*
  Difference between while and do...while loop

  - 'while' loop checks the condition before the execution of the block.
  - 'do...while' loop executes the block first and then checks the condition.

  Example:
    Let's see the difference between while and do...while loop.
*/

console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t Difference btw While and Do While");
console.log("----------------------------------------------------------------");
let k = 6;
console.log("Using while loop:");
while (k <= 5) {
	console.log(k); // This block won't execute because the condition is false initially
	k++;
}

let l = 6;
console.log("Using do...while loop:");
do {
	console.log(l); // This block executes at least once, even though the condition is false initially
	l++;
} while (l <= 5);

/*
  While loops for Arrays, Objects, and Maps

  - While loops can be used to iterate over arrays, objects, and maps by using an index or condition.
  - Arrays: Iterate over each element until the index is less than the array length.
  - Objects: Iterate over each key-value pair using a condition.
  - Maps: Iterate over each key-value pair using a condition.

  Example:
    Let's use while loops to iterate over an array, an object, and a Map.
*/

// Array
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t While Loop for Arrays");
console.log("----------------------------------------------------------------");
const fruits = ["apple", "banana", "orange"];
let index = 0;
console.log("Iterating over array using while loop:");
while (index < fruits.length) {
	console.log(fruits[index]);
	index++;
}

// Object
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t While Loop for Objects");
console.log("----------------------------------------------------------------");
const person = { name: "John", age: 30, city: "New York" };
let propIndex = 0;
console.log("Iterating over object using while loop:");
const keys = Object.keys(person);
while (propIndex < keys.length) {
	const key = keys[propIndex];
	console.log(key + ": " + person[key]);
	propIndex++;
}

// Map
console.log(
	"\n----------------------------------------------------------------"
);
console.log("\t \t While Loop for Maps");
console.log("----------------------------------------------------------------");
const colorsMap = new Map([
	["red", "#FF0000"],
	["green", "#00FF00"],
	["blue", "#0000FF"],
]);
console.log("Iterating over Map using while loop:");
const iterator = colorsMap.entries();
let entry = iterator.next();
while (!entry.done) {
	console.log(entry.value[0] + ": " + entry.value[1]);
	entry = iterator.next();
}

/*
let index = 0
// while (index <= 10) {
//   console.log(`Value of index is ${index}`);
//   index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1
}

let score = 11

do {
  console.log(`Score is ${score}`);
  score++
} while (score <= 10);
*/
