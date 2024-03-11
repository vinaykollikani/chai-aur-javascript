// Topic: Truthy and Falsy values

// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.

// Falsy values in JavaScript are:
// false, 0, -0, 0n, "", null, undefined, NaN

// Here's an example to illustrate:

function checkTruthiness(value) {
	if (value) {
		console.log(`The value '${value}' is Truthy.`);
	} else {
		console.log(`The value '${value}' is Falsy.`);
	}
}

checkTruthiness(1); // Outputs: The value '1' is Truthy.
checkTruthiness("Hello"); // Outputs: The value 'Hello' is Truthy.
checkTruthiness(false); // Outputs: The value 'false' is Falsy.
checkTruthiness(0); // Outputs: The value '0' is Falsy.
checkTruthiness(null); // Outputs: The value 'null' is Falsy.
checkTruthiness(undefined); // Outputs: The value 'undefined' is Falsy.

// In this example, the function checkTruthiness checks if the provided value is truthy or falsy.
// If the value is truthy, it logs that the value is truthy.
// If the value is falsy, it logs that the value is falsy.

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", Strings, Numbers, " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
	console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
