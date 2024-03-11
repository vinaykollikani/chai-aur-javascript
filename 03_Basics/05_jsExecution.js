// ++++++++++++++++++++ Javascript Execution ++++++++++++++++++++
// Topic: JavaScript Execution Context

// Execution Context is an abstract concept used by the JavaScript engine to track the execution of a function or the global code.

// There are three types of Execution Context in JavaScript:
// 1. Global Execution Context (GEC)
// 2. Functional Execution Context (FEC)
// 3. Eval Function Execution Context

// 1. Global Execution Context (GEC):
// The Global Execution Context is the default execution context. The code that is not inside any function is in the GEC.
// There is only one GEC throughout one program.

// Example:
var globalVar = "This is a global variable";
console.log(globalVar); // Output: This is a global variable

// 2. Functional Execution Context (FEC):
// Whenever a function is called, a new execution context is created, this is the Functional Execution Context.
// Each function has its own execution context.

// Example:
function exampleFunction() {
	var functionVar = "This is a function variable";
	console.log(functionVar); // Output: This is a function variable
}
exampleFunction();

// 3. Eval Function Execution Context:
// The eval function also gets its own execution context. However, the use of eval is not recommended due to security and performance issues.

// Example:
eval('var evalVar = "This is an eval variable"; console.log(evalVar);'); // Output: This is an eval variable

// TOPIC: Memory Creation Phase
// In the memory creation phase, JavaScript scans through the code and allocates memory for variable and function declarations. This is why you can call functions that are declared later in the code, a concept known as hoisting.

console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

// In the above example, `myVar` is hoisted during the memory creation phase, so it exists when we first log it to the console, but it's `undefined` because no value has been assigned yet.

// ++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Execution Phase
// During the execution phase, JavaScript goes through your code line by line and runs/executes it. It assigns values to variables and executes function calls.

var myVar = 5;
console.log(myVar); // Output: 5

function myFunc() {
	console.log("Function called");
}
myFunc(); // Output: Function called

// In the above example, during the execution phase, `myVar` is assigned the value `5`, and `myFunc` is called, logging 'Function called' to the console.

// These two phases are part of what's known as the JavaScript Execution Context. Understanding these concepts can help when debugging JavaScript code and understanding its behavior.

// Remember, JavaScript is a single-threaded language, which means it executes one operation at a time, in order, from top to bottom. It first goes through the memory creation phase, and then it enters the execution phase. This is a continuous process until all the code has been executed.

// ++++++++++++++++++++++++++++++++++++++++++++++

// Topic: Call Stack

// The Call Stack is a mechanism JavaScript uses to keep track of function calls in your program.

// Let's understand this with an example:

function multiply(x, y) {
	return x * y;
}

function square(n) {
	return multiply(n, n);
}

function printSquare(n) {
	var squared = square(n);
	console.log(squared);
}

printSquare(5);

// When you run this program, here's how the call stack changes:

// 1. Initially it's empty.
// 2. `printSquare(5)` is called and added to the call stack.
// 3. `printSquare` calls `square(5)`, which is added to the top of the call stack.
// 4. `square` calls `multiply(5, 5)`, which is added to the top of the call stack.
// 5. `multiply` returns 25, so it's removed from the call stack.
// 6. `square` returns 25, so it's removed from the call stack.
// 7. `printSquare` logs 25 to the console, so it's removed from the call stack.
// 8. The program ends, leaving an empty call stack.

// The Call Stack is important for understanding how function calls are processed in your JavaScript code.

//  ++++++++++++++++++++++++++++++++++++++++++++++ 

