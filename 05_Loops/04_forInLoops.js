// -----------------------
//      FOR IN Loops
// -----------------------
/*
  For...in Loops in JavaScript

  The for...in loop in JavaScript is used to iterate over the properties of an object. It can also be used to iterate over the indices of an array or the keys of a Map.

  Syntax:
    for (variable in object) {
      // code block to be executed
    }

  Example:
    Let's use for...in loops to iterate over arrays, objects, and maps.
*/

// Iterating over an array
const numbers = [1, 2, 3];
// console.log("Using for...in loop to iterate over an array:");
for (const index in numbers) {
	// console.log(index, numbers[index]); // Output: 0 1, 1 2, 2 3
}

// Iterating over an object
const person = { name: "John", age: 30 };
// console.log("Using for...in loop to iterate over an object:");
for (const key in person) {
	// console.log(key, person[key]); // Output: name John, age 30
}

// Iterating over a Map
const colorsMap = new Map([
	["red", "#FF0000"],
	["green", "#00FF00"],
	["blue", "#0000FF"],
]);
// console.log("Using for...in loop to iterate over a Map:");
for (const key in colorsMap) {
	// console.log(key, colorsMap[key]); // Output: undefined undefined (for each key)
}

/*
  Note:
  - When iterating over arrays, for...in returns the indices, not the elements themselves.
  - When iterating over objects, for...in returns the keys of the object.
  - When iterating over Maps, for...in does not work correctly as it does not directly access the values of the Map.
*/

// ----------------------------------------------------------------

// For IN : Objects
const myObject = {
	1: "A",
	2: "B",
	3: "C",
	4: "D",
	5: "E",
};
for (const key in myObject) {
	// console.log(key + " : " + myObject[key]);
}

// For IN : Arrays
// const myArray = ["A", "B", "C", "D", "E"];
for (const key in myArray) {
	// console.log(`Value at Index : ${key} is '${myArray[key]}'`);
}
