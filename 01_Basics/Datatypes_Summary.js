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


// ==================================

// There are two types of memory 
// 1. Stack ( Primitive )
    //  Stack memory stores the values
// 2. Heap ( Non-Primitive )
    //  Heap memory stores the reference


// ! Memory Management in JavaScript

// JavaScript's memory management is handled automatically by the runtime environment, typically the JavaScript engine in web browsers or Node.js. It uses a garbage collector to manage memory, ensuring that developers do not need to manually allocate or deallocate memory.

// **Memory Life Cycle**:
// - **Allocation**: JavaScript allocates memory for objects, functions, and other data structures.
// - **Usage**: The allocated memory is used during program execution.
// - **Release**: Once an object or function is no longer needed, the memory it occupies is released. The JavaScript engine handles this process.

// **Stack and Heap**:
// - **Stack**: Used to store static data with a fixed size known during compile time. Static data includes primitive values (strings, numbers, boolean, null, and undefined) and references to objects and functions. This process is called static memory allocation.
// - **Heap**: Stores dynamically allocated data, such as objects and functions. Unlike the stack, the heap doesn't allocate a fixed amount of memory; it grows as needed during runtime.

// **Example**:
// const employee = {
//     name: 'Rajesh',
//     age: 30,
// };

// const name = "Ram";

// function getName(name) {
//     return name;
// }

// const newEmployee = employee;

// - In this example, the object 'employee' is created in the heap, and a reference to it is stored in the stack.

// **Garbage Collection**:
// - Garbage collectors release memory occupied by variables, objects, or functions that are no longer needed.
// - Predicting when something becomes obsolete is challenging, but algorithms help identify unused memory.
// - Reference-counting garbage collection frees memory for objects without references. However, it doesn't handle cyclic references well.

// Remember, understanding memory management is crucial for optimizing performance and avoiding memory leaks in your JavaScript applications.