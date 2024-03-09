const userDetails = {
	userName: "Jarvish Dev",
	userId: "R21IT081",
	userNumber: 9777515899,
	welcomeMessage: function welcomeMessage() {
		console.log(`Welcome ${this.userName}.`);
		// console.log(this);
		// Output :
		// {
		//     userName: 'Jarvish Dev',
		//     userId: 'R21IT081',
		//     userNumber: 9777515899,
		//     welcomeMessage: [Function: welcomeMessage]
		// }
	},
};
// userDetails.welcomeMessage();
// userDetails.userName = "Vinay Kumar";
// userDetails.welcomeMessage();
// console.log(this); // Output : {}

// Different Methods of Writing Functions
// Method 1 :
function printOne() {
	console.log("One");
}
// Method 2 :
const printTwo = function () {
	console.log("Two");
};
// Method 3 : (Arrow Function) Explicit Return
const printThree = () => {
	console.log("Three");
};
// Method 4 : (Arrow Function) Implicit Return
const printFour = () => console.log("Four");

// printOne();
// printTwo();
// printThree();
// printFour();

// Different Methods of Writing Functions
// Method 1 :
function methodOne(a, b) {
	return a + b;
}
// Method 2 :
const methodTwo = function (a, b) {
	return a + b;
};
// Method 3 : (Arrow Function) Explicit Return
const methodThree = (a, b) => {
	return a + b;
};
// Method 4 : (Arrow Function) Implicit Return
const methodFour = (a, b) => a + b;

// console.log("Method 1 : Sum ( 7, 18) : " + methodOne(7, 18));
// console.log("Method 2 : Sum ( 7, 18) : " + methodTwo(7, 18));
// console.log("Method 3 : Sum ( 7, 18) : " + methodThree(7, 18));
// console.log("Method 4 : Sum ( 7, 18) : " + methodFour(7, 18));
