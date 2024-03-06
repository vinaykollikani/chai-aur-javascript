// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
	email: "some@gmail.com",
	fullname: {
		userfullname: {
			firstname: "hitesh",
			lastname: "choudhary",
		},
	},
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
	{
		id: 1,
		email: "h@gmail.com",
	},
	{
		id: 1,
		email: "h@gmail.com",
	},
	{
		id: 1,
		email: "h@gmail.com",
	},
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
	coursename: "js in hindi",
	price: "999",
	courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];

// ! Difference Between Singletons and Objects Literals
// While both object literals and singletons are used to create objects in JavaScript, they differ in key aspects:

// Object Literals:

// Creation: Defined using curly braces {} containing key-value pairs representing properties and methods.
// Instances: Create single instances by default. Any changes made to the object affect that specific instance throughout the script.
// Scope: Typically defined within a function or block, limiting their scope.
// Example:
// JavaScript
// const person = {
// 	name: "John",
// 	age: 30,
// 	greet() {
// 		console.log("Hello, my name is", this.name);
// 	},
// };

// Singleton Objects:
// Purpose: Aim to create a single, globally accessible instance of an object throughout the application.
// Implementation: Often achieved using design patterns involving functions, closures, or private variables.
// Instances: Ensure only one instance exists, even if accessed from different parts of the code.
// Scope: Typically have global scope or a mechanism to access the single instance from anywhere.
// Example (using a module pattern):
// const singleton = (function () {
// 	let instance;
// 	function createInstance() {
// 		const object = {
// 			name: "Global Object",
// 			sayHi() {
// 				console.log("Hi from the singleton!");
// 			},
// 		};
// 		return object;
// 	}
// 	return {
// 		getInstance() {
// 			if (!instance) {
// 				instance = createInstance();
// 			}
// 			return instance;
// 		},
// 	};
// })();
// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();
// console.log(instance1 === instance2); // true (same instance)

// Key Differences:
// Intention: Object literals are for creating regular objects, while singletons are specifically designed to have only one instance.
// Control: Object literals are simpler to define, but don't guarantee a single instance. Singletons require specific implementation to control instance creation.
// Scope: Object literals have limited scope by default, while singletons often have broader scope for global access.
// Choosing Between Them:
// Use object literals for regular objects where you only need one instance or don't need strict control over modifications.
// Use singletons when you need a single, central point of access to data or functionality throughout your application. However, be cautious about their global nature and potential side effects.
