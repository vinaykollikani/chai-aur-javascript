/*
  For Loop in JavaScript

  The 'for' loop in JavaScript is used to execute a block of code repeatedly.
  It consists of three parts: initialization, condition, and iteration.

  Syntax:
    for (initialization; condition; iteration) {
      // code block to be executed
    }

  Example:
    Let's use a for loop to print numbers from 1 to 5.
*/
console.log("----------------------------------------------------------------");
console.log("\t\t For Loop in JavaScript");
console.log("----------------------------------------------------------------");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration : " + i); // Output: 1, 2, 3, 4, 5
}

/*
  Nested For Loop in JavaScript

  A nested for loop is a loop inside another loop. It is useful for iterating over multidimensional arrays or performing operations on nested data structures.

  Example:
    Let's use a nested for loop to print a multiplication table.
*/
console.log("\n----------------------------------------------------------------");
console.log("\t\tNested For Loop in JavaScript");
console.log("----------------------------------------------------------------");
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + (i * j));
  }
}

/*
  Break and Continue Keyword in JavaScript

  - 'break': Terminates the current loop or switch statement and transfers control to the statement following the terminated statement.
  - 'continue': Skips the current iteration of a loop and continues with the next iteration.

  Example:
    Let's use break and continue in a loop to print even numbers between 1 and 10.
*/
console.log("\n----------------------------------------------------------------");
console.log("\t\t Break & Continue in JavaScript");
console.log("----------------------------------------------------------------");
console.log("Even numbers between 1 and 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log(i);
}

/*
  For Loop using Arrays, Objects, and Maps

  - Arrays: Iterate over each element of an array.
  - Objects: Iterate over each key-value pair of an object.
  - Maps: Iterate over each key-value pair of a Map.

  Example:
    Let's iterate over an array, an object, and a Map using a for loop.
*/

// Array
const fruits = ["apple", "banana", "orange"];
console.log("\n----------------------------------------------------------------");
console.log("\t\t For Loop in Array in JavaScript");
console.log("----------------------------------------------------------------");
console.log("Iterating over array:");
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// Object
const person = { name: "John", age: 30, city: "New York" };
console.log("\n----------------------------------------------------------------");
console.log("\t\t For Loop in Object in JavaScript");
console.log("----------------------------------------------------------------");
console.log("Iterating over object:");
for (let key in person) {
	console.log(key + ": " + person[key]);
}

// Map
const colorsMap = new Map([["red", "#FF0000"], ["green", "#00FF00"], ["blue", "#0000FF"]]);
console.log("\n----------------------------------------------------------------");
console.log("\t\t For Loop in Maps in JavaScript");
console.log("----------------------------------------------------------------");
console.log("Iterating over Map:");
for (let [key, value] of colorsMap) {
  console.log(key + ": " + value);
}
