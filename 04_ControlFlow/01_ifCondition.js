// IF Condition

// Basic Operators used in IF condition
// >, <, >=, <=, ==, !=, ===, &&, ||
// Topic: Control Flow in JavaScript

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// ? 1. The 'if' Statement
// The 'if' statement is used to specify a block of JavaScript code to be executed if a condition is true.
let x = 10;
if (x > 5) {
	console.log("x is greater than 5");
}
// alternate method :
if (x > 10) console.log("x is greater than 10");

if (x < 10) {
	console.log("x is less than 10");
	x = 10;
}
// altertane method :
if (x < 10) console.log("x is less than 10"), (x = 10);
// Not preferable

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// ? 2. The 'if else' Statement
// The 'if else' statement is used to specify a new condition to test if the first condition is false.
if (x > 15) {
	console.log("x is greater than 15");
} else {
	console.log("x is not greater than 15");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// ?  3. The 'else if' Ladder
// The 'else if' statement is used to specify a new condition to test if the first condition is false.
if (x > 20) {
	console.log("x is greater than 20");
} else if (x > 15) {
	console.log("x is greater than 15");
} else {
	console.log("x is not greater than 15");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// ? 4. The 'nested if' Statement
// A 'nested if' is an if statement that is contained inside another if statement.
// It allows you to test for multiple conditions and execute different code blocks depending on the condition that is met.
if (x > 5) {
	if (x > 10) {
		console.log("x is greater than 10");
	} else {
		console.log("x is greater than 5 but not greater than 10");
	}
} else {
	console.log("x is not greater than 5");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Operators used in Condition Statements

// +++++++++++++++++++++++++++++++++++++++++++++++++++

const a = 20;
const b = 10;
const c = 15;

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Greater Than Operator (>)
// The '>' operator checks if the value of the left operand is greater than the value of the right operand. If yes, then the condition becomes true.
if (a > b) {
	console.log("a is greater than b");
} else {
	console.log("a is not greater than b");
}
// Output: a is greater than b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Less Than Operator (<)
// The '<' operator checks if the value of the left operand is less than the value of the right operand. If yes, then the condition becomes true.
if (a < b) {
	console.log("a is less than b");
} else {
	console.log("a is not less than b");
}
// Output: a is not less than b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Greater Than or Equal To Operator (>=)
// The '>=' operator checks if the value of the left operand is greater than or equal to the value of the right operand. If yes, then the condition becomes true.
if (a >= b) {
	console.log("a is greater than or equal to b");
} else {
	console.log("a is not greater than or equal to b");
}
// Output: a is greater than or equal to b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Less Than or Equal To Operator (<=)
// The '<=' operator checks if the value of the left operand is less than or equal to the value of the right operand. If yes, then the condition becomes true.
if (a <= b) {
	console.log("a is less than or equal to b");
} else {
	console.log("a is not less than or equal to b");
}
// Output: a is not less than or equal to b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Equality Operator (==)
// The '==' operator checks if the value of the left operand is equal to the value of the right operand. If yes, then the condition becomes true.
if (a == b) {
	console.log("a is equal to b");
} else {
	console.log("a is not equal to b");
}
// Output: a is not equal to b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Not Equal Operator (!=)
// The '!=' operator checks if the value of the left operand is not equal to the value of the right operand. If yes, then the condition becomes true.
if (a != b) {
	console.log("a is not equal to b");
} else {
	console.log("a is equal to b");
}
// Output: a is not equal to b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Identity Operator (===)
// The '===' operator checks if the value of the left operand is equal to the value of the right operand and they are of the same type. If yes, then the condition becomes true.
if (a === b) {
	console.log("a is identical to b");
} else {
	console.log("a is not identical to b");
}
// Output: a is not identical to b

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Logical AND Operator (&&)
// The '&&' operator checks if both the operands are non-zero (true). If yes, then the condition becomes true.
if (a > b && a > c) {
	console.log("`a` is Greater than `b` and `c`");
} else {
	console.log("`a` is Greater than `b` and `c`");
}
// Output: Both a and b are true

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// TOPIC: Logical OR Operator (||)
// The '||' operator checks if either of the operands is non-zero (true). If yes, then the condition becomes true.
if (a > b || a > c) {
	console.log("`a` is not the smallest.");
} else {
	console.log("`a` is the smallest.");
}
// Output: Either a or b is true

// +++++++++++++++++++++++++++++++++++++++++++++++++++

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
	console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
	console.log("User logged in");
}
