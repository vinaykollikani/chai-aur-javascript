// IIFE : Immediately Invoked Function Expressions
// IIFE : An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// Syntax :
// ( function definition ) ( function call );
// (function () {
// 	// …
// })();

// (() => {
// 	// …
// })();

// (async () => {
// 	// …
// })();

(function IIFE() {
	console.log("IIFE");
})();

(function IIFE1(num) {
	console.log(`IIFE : ${num}`);
})(7);

(() => {
	console.log(`IIFE : Arrow`);
})();
((name) => {
	console.log(`IIFE : Arrow ${name}`);
})("Jarvish");
