// ! Numbers in  JavaScript

/*
const num = 400;
// console.log(num); // 400

const newNum = new Number(562);
// console.log(newNum); // [Number: 562]
// JavaScript Numbers

// In JavaScript, numbers can be written with or without decimals.
let num1 = 34;
let num2 = 34.00;

// Extra large or extra small numbers can be written with scientific (exponential) notation.
let num3 = 123e5;      // 12300000
let num4 = 123e-5;     // 0.00123

// JavaScript Numbers are Always 64-bit Floating Point

// JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

// JavaScript Number Methods

// The toString() method returns a number as a string.
let num5 = 123;
num5.toString();            // returns '123' 

// The toExponential() method returns a string, with a number rounded and written using exponential notation.
let num6 = 9.656;
num6.toExponential(2);     // returns 9.66e+0

// The toFixed() method returns a string, with the number written with a specified number of decimals.
let num7 = 9.656;
num7.toFixed(0);           // returns 10
num7.toFixed(2);           // returns 9.66

// The toPrecision() method returns a string, with a number written with a specified length.
let num8 = 9.656;
num8.toPrecision();        // returns 9.656
num8.toPrecision(2);       // returns 9.7
num8.toPrecision(4);       // returns 9.656

// The valueOf() method returns a number as a number.
let num9 = 123;
num9.valueOf();            // returns 123 from variable num9
(123).valueOf();           // returns 123 from literal 123
Number(123).valueOf();     // returns 123 from number object
*/

// ! Maths in JavaScript

// JavaScript Math Object

// The JavaScript Math object allows you to perform mathematical tasks.

// Math Properties

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// Math Methods

// Math.round(4.7)    // returns 5
// Math.round(4.4)    // returns 4

// Math.pow(8, 2)     // returns 64 (8 to the power of 2)

// Math.sqrt(64)      // returns 8

// Math.abs(-4.7)     // returns 4.7

// Math.ceil(4.4)     // returns 5
// Math.floor(4.7)    // returns 4

// Math.sin(90 * Math.PI / 180)     // returns the sine of 90 degrees
// Math.cos(0 * Math.PI / 180)      // returns the cosine of 0 degrees

// Math.min(0, 150, 30, 20, -8, -200)   // returns -200
// Math.max(0, 150, 30, 20, -8, -200)   // returns 150

// Math.random()     // returns a random number
// console.log(Math.floor(Math.random() * (10**6)));
// for (let index = 0; index < 10; index++) {
//     console.log(Math.floor((Math.random() + 0.1) * (10**6)));
// }

// const min = 100000;
// const max = 999999;

// for (let index = 0; index < 10; index++) {
//     random = Math.random();
// 	console.log(Math.floor(random * (max - min + 1)) + min);
// }
