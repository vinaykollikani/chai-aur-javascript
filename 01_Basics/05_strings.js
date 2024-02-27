let strOne = "Hello";
let strTwo = "Hello";
// const myName = "Jarvish";
const myAge = 23;
const myEmail = "jarvishdev@gmail.com";
// console.log(strOne + " _ " + strTwo);

// String interpolation
// console.log(`Hello, my name is ${myName} and my age is ${myAge} and my email is ${myEmail}`);

// Syntax to create a new String

const myName = new String("Jarvish Dev");
console.log(myName);
// Output
/*
String {'Jarvish Dev'}
0: "J"
1: "a"
2: "r"
3: "v"
4: "i"
5: "s"
6: "h"
7: " "
8: "D"
9: "e"
10: "v"
length: 11
[[Prototype]]: String
[[PrimitiveValue]]: "Jarvish Dev"
*/

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(0));
// console.log(myName.indexOf('a'));
console.log(myName.substring(0, 5));

// Strings
// A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.

var myString = "Hello, World!";

// Length of a String
// The length property returns the length of a string.

var stringLength = myString.length; // Outputs: 13

// Finding a String in a String
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.

var stringPosition = myString.indexOf("World"); // Outputs: 7

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.

var stringLastPosition = myString.lastIndexOf("o"); // Outputs: 8

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

// Searching for a String in a String
// The search() method searches a string for a specified value and returns the position of the match.

var stringSearch = myString.search("World"); // Outputs: 7

// Extracting String Parts
// The slice() method extracts a part of a string and returns the extracted part in a new string.

var stringSlice = myString.slice(7, 12); // Outputs: "World"

// The substring() method is similar to slice(). The difference is that substring() cannot accept negative indexes.

var stringSubstring = myString.substring(7, 12); // Outputs: "World"

// The substr() method is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

var stringSubstr = myString.substr(7, 5); // Outputs: "World"

// Replacing String Content
// The replace() method replaces a specified value with another value in a string.

var stringReplace = myString.replace("World", "Universe"); // Outputs: "Hello, Universe!"

// Converting to Upper and Lower Case
// The toUpperCase() and toLowerCase() methods convert a string to upper and lower case.

var stringUpper = myString.toUpperCase(); // Outputs: "HELLO, WORLD!"
var stringLower = myString.toLowerCase(); // Outputs: "hello, world!"

// The concat() Method
// concat() joins two or more strings.

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(", ", text2); // Outputs: "Hello, World"

// String.trim()
// The trim() method removes whitespace from both sides of a string.

var text = "       Hello World!        ";
// alert(text.trim()); // Outputs: "Hello World!"

// Extracting String Characters
// charAt() method returns the character at a specified index (position) in a string.

var char = myString.charAt(0); // Outputs: "H"

// Property access [ ]
// ECMAScript 5 (2009) allows property access [ ] on strings.

var char = myString[1]; // Outputs: "e"
console.log(char); // Outputs: "e"
