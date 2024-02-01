// ! There are mainly two types of datatypes in JavaScript.
// ? 1. Primitive datatypes
// ? 2. Non Primitive datatypes

// ! Primitive datatypes
/*
 * Primitive datatypes are the fundamental datatypes in JavaScript
 * They are called " By Value "
 * There are a total of 7 Primitive datatypes.
 * 1. STRING
 * 2. NUMBER
 * 3. BOOLEAN
 * 4. UNDEFINED
 * 5. NULL
 * 6. BIGINT
 * 7. SYMBOL
 */

// ! Non Primitive datatypes
/*
 * Non Primitive datatypes are the derived datatypes in JavaScript
 * They are called " By Reference "
 * There are a total of 3 Non Primitive datatypes.
 * 1. ARRAY
 * 2. OBJECT
 * 3. FUNCTIONS
 */

// ? JavaScript is a dynamically typed language.
// This means that variable types are not explicitly declared and are determined at runtime based on the value assigned to the variable. This differs from statically typed languages like Java or C++ where you must explicitly declare variable types before using them.

// Here are some of the key differences between statically and dynamically typed languages:

// ? Statically typed languages:
// Variables must be declared with a specific type before they can be used.
// Type errors are often caught at compile time, which can help prevent bugs.
// Can offer better performance due to optimizations based on known types.

// ? Dynamically typed languages:
// Variables do not require explicit type declarations.
// Type errors are typically caught at runtime, which can make debugging more challenging.
// Can be more flexible and easier to write code for, but may require more testing to ensure type safety.

// Symbols in JavaScript

// const symbolExample = Symbol("123");
// const symbolExample2 = Symbol("123");

// console.log(symbolExample);
// console.log(symbolExample2);
// console.log(symbolExample == symbolExample2);

// BigInt
// const bigNumber = 123456789n;
// console.log(typeof bigNumber);

// ! Arrays
// const arrayEx = ["hello", "world" , "javascript"];
// console.log(typeof arrayEx); // object

// ! Object
// const objectEx = {
//    name : "Vinay Kumar",
//    age : 23,
//    city: "Rayagada"
// };
// console.log(typeof objectEx); // object

// ! Function
// const functionEx = function () {
//    console.log("Hello World...");
// }
// console.log(typeof functionEx); // function -> object
// console.log(functionEx); // [Function: functionEx]
