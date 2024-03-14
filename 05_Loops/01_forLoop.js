// Topic: For Loop
// A 'for' loop is a control flow statement that allows code to be executed repeatedly.
// Syntax: for(initialization; condition; increment/decrement) { // code block to be executed }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// for(let i = 0; i < 5; i++) {
//     console.log(i);  // This will print numbers 0 through 4.
// }

// Topic: Nested For Loop
// A 'nested for loop' is a loop inside another loop.

// for(let i = 0; i < 3; i++) {
//     for(let j = 0; j < 2; j++) {
//         console.log(`i = ${i}, j = ${j}`);  // This will print all combinations of i and j.
//     }
// }

// Topic: Break
// The 'break' statement "jumps out" of a loop and continues executing the code after the loop.

// for(let i = 0; i < 5; i++) {
//     if(i === 3) {
//         break;  // This will stop the loop when i equals 3.
//     }
//     console.log(i);  // This will print numbers 0 through 2.
// }

// Topic: Continue
// The 'continue' statement "jumps over" one iteration in the loop and continues with the next iteration.

// for(let i = 0; i < 5; i++) {
//     if(i === 3) {
//         continue;  // This will skip the loop iteration when i equals 3.
//     }
//     console.log(i);  // This will print numbers 0, 1, 2, and 4.
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Tables Print
// Table of 1
// for (let i = 1; i <= 10; i++) {
//     console.log(`1 * ${i} = ${i * 1}`);
// }
// 1 - 10 Tables
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log();
// }

//
// Topic: For Loop using Arrays
// Arrays in JavaScript can be iterated using a 'for' loop.

let array = ["a", "b", "c", "d", "e", "f", "g", "h", 1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
	console.log(array[i]); // This will print each element of the array.
}

// Topic: For Loop using Objects
// Objects in JavaScript can be iterated using a 'for...in' loop.

let object = {
	name: "John",
	age: 30,
	city: "New York",
};

for (let key in object) {
	console.log(`${key}: ${object[key]}`); // This will print each key-value pair of the object.
}
