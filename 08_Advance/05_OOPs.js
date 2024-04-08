// Creating a new instance in JS
function userDetails(username, loginCount, isLoggedIn) {
	this.username = username;
	this.loginCount = loginCount;
	this.isLoggedIn = isLoggedIn;

	return this;
}
const userOne = new userDetails("Jarvish Dev", 7, true);
const userTwo = new userDetails("Developer", 8, true);

userDetails.prototype.increment = function () {
	this.loginCount++;
	console.log(this.loginCount);
};
userDetails.prototype.decrement = function () {
	this.loginCount--;
	console.log(this.loginCount);
};
userDetails.prototype.printUser = function () {
	console.log(this.username);
	console.log(this.loginCount);
	console.log(this.isLoggedIn);
};
userOne.printUser();

/**
 * Object-Oriented Programming (OOP) in JavaScript
 *
 * JavaScript supports object-oriented programming paradigm. Although it's a
 * prototype-based language, it also provides syntax and features to implement
 * classical OOP concepts such as encapsulation, inheritance, and polymorphism.
 *
 * 1. Encapsulation: Encapsulation refers to bundling of data and methods that
 * operate on the data into a single unit, often referred to as a class. In
 * JavaScript, we can achieve encapsulation using object literals, functions,
 * and ES6 classes.
 */

// Example of encapsulation using object literal
// const person = {
//   name: "John",
//   age: 30,
//   // Method to display information about the person
//   displayInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// };

// Example of encapsulation using function constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.displayInfo = function() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   };
// }

// Example of encapsulation using ES6 class
// class PersonClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   displayInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

/**
 * 2. Inheritance: Inheritance is the process where one class acquires the
 * properties and methods of another. JavaScript supports inheritance through
 * prototype chaining.
 */

// Example of inheritance
// function Employee(name, age, designation) {
//   Person.call(this, name, age); // Call the parent constructor
//   this.designation = designation;
// }

// Inheriting methods from Person prototype
// Employee.prototype = Object.create(Person.prototype);

// Adding additional method to Employee
// Employee.prototype.displayDesignation = function() {
//   console.log(`Designation: ${this.designation}`);
// };

// Creating an instance of Employee
// const emp = new Employee("Alice", 25, "Developer");
// emp.displayInfo(); // Output: Name: Alice, Age: 25
// emp.displayDesignation(); // Output: Designation: Developer

/**
 * 3. Polymorphism: Polymorphism allows methods to do different things based
 * on the object that invokes them. In JavaScript, polymorphism is achieved
 * through method overriding.
 */

// Example of polymorphism
// class Animal {
//   makeSound() {
//     console.log("Some generic sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Woof woof!");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Meow!");
//   }
// }

// Polymorphic function
// function makeAnimalSound(animal) {
//   animal.makeSound();
// }

// const dog = new Dog();
// const cat = new Cat();

// makeAnimalSound(dog); // Output: Woof woof!
// makeAnimalSound(cat); // Output: Meow!    b,kiglzno;guiw

/**
 * The 'NEW' keyword in JavaScript
 *
 * In JavaScript, the 'new' keyword is used to create instances of objects or
 * to invoke constructor functions. When 'new' is used before a function call,
 * it creates a new object, sets the prototype of that object to the prototype
 * property of the constructor function, and binds 'this' to the new object
 * within the constructor function.
 *
 * 1. Creating Instances:
 *    When used with constructor functions or classes, 'new' creates instances
 *    of those objects. It initializes the newly created object with the
 *    properties and methods defined within the constructor function or class.
 */

// Example of creating instances using 'new' keyword with constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const john = new Person("John", 30);

// Example of creating instances using 'new' keyword with ES6 class
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
// }

// const myCar = new Car("Toyota", "Camry");

/**
 * 2. Constructor Invocation:
 *    When 'new' is used with a function, it invokes that function as a
 *    constructor function. This means that the function is called with a new
 *    empty object as its context ('this'), unless it explicitly returns an
 *    object. If an object is returned, that object is used as the result of
 *    the 'new' expression.
 */

// Example of constructor invocation using 'new' keyword
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// const laptop = new Product("Laptop", 1000);

/**
 * 3. Prototype Linkage:
 *    After creating a new object with 'new', JavaScript sets up a prototype
 *    chain where the prototype property of the constructor function becomes
 *    the prototype of the newly created object. This allows the newly created
 *    object to inherit properties and methods from the constructor's prototype.
 */

// Example of prototype linkage using 'new' keyword
// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.makeSound = function() {
//   console.log("Some generic sound");
// };

// const dog = new Animal("Dog");
// dog.makeSound(); // Output: Some generic sound

/**
 * 4. 'new.target' Property:
 *    Inside a constructor function, the 'new.target' property refers to the
 *    constructor function that was directly invoked with 'new'. This property
 *    can be used to determine whether a function was called as a constructor
 *    or as a regular function.
 */

// Example of 'new.target' property
// function MyClass() {
//   if (!new.target) {
//     throw new Error("MyClass() must be called with 'new'");
//   }
// }

// const instance = new MyClass(); // No error

// try {
//   const instance2 = MyClass(); // Throws error
// } catch (error) {
//   console.error(error.message);
// }
