// const myArray = [0, 1, 2, 3, 4, 5, 6];
// const myArray1 = new Array(0, 1, 2, 3, 4, 5, 3);
// const newArray = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log("\nmyArray :: " + myArray);
// console.log(myArray);
// console.log("\nnewArray :: " + myArray);
// console.log(newArray);
// console.log("\nLength of Array myArray.length :: " + myArray.length);
// console.log("\nLength of Array newArray.length :: " + newArray.length);

// console.log(myArray1.includes(3));
// console.log(myArray1.indexOf(3));
// const newArray2 = newArray.join(' , ');
// console.log(newArray2);

const myArray = [0, 1, 2, 3, 4, 5, 6];
const myArray1 = new Array(0, 1, 2, 3, 4, 5, 3);
const newArray = ["a", "b", "c", "d", "e", "f"];

const sliceArray = newArray.slice(0, 2);
console.log("\nsliceArray :: " + sliceArray);
console.log("\nnewArray :: " + myArray);

const spliceArray = newArray.splice(1, 4);
console.log("\nspliceArray :: " + spliceArray);
console.log("\nnewArray :: " + newArray);
console.log("\n");

/*
JavaScript Arrays

An array is a special variable, which can hold more than one value at a time.

Creating an Array:
You can create an array in JavaScript using the Array constructor or by using square brackets.

let array1 = new Array();
let array2 = [];

--- Array Properties:

1. length: It returns the length of an array.

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5

--- Array Methods:

1. push(): It adds new items to the end of an array.

arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

2. pop(): It removes the last element from an array.

arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

3. shift(): It removes the first element from an array.

arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

4. unshift(): It adds new items to the beginning of an array.

arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

5. splice(): It adds/removes items to/from an array.

arr.splice(2, 0, 'a', 'b'); // adds 'a', 'b' at index 2
console.log(arr); // Output: [1, 2, 'a', 'b', 3, 4, 5]

arr.splice(2, 2); // removes 2 items from index 2
console.log(arr); // Output: [1, 2, 3, 4, 5]

6. slice(): It slices out a piece of an array into a new array.

let newArr = arr.slice(1, 3);
console.log(newArr); // Output: [2, 3]

7. sort(): It sorts the items of an array.

arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5]

8. reverse(): It reverses the items in an array.

arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

*/

/*
Topic: Arrays and their Methods in JavaScript

Arrays in JavaScript come with a variety of built-in methods that make it easier to manipulate and work with array data. Here are some important array methods:
1. push():
- Adds one or more elements to the end of an array.
Example:
let fruits = ['apple', 'orange', 'banana'];
fruits.push('grape', 'kiwi');
// Result: ['apple', 'orange', 'banana', 'grape', 'kiwi']
    
2. pop():
- Removes the last element from an array and returns that element.
Example:
let removedFruit = fruits.pop();
// Result: 'kiwi', fruits is now ['apple', 'orange', 'banana', 'grape']
    
3. shift():
- Removes the first element from an array and shifts all other elements to a lower index.
Example:
let firstFruit = fruits.shift();
// Result: 'apple', fruits is now ['orange', 'banana', 'grape']
    
4. unshift():
- Adds one or more elements to the beginning of an array and shifts existing elements to a higher index.
Example:
fruits.unshift('watermelon', 'blueberry');
// Result: ['watermelon', 'blueberry', 'orange', 'banana', 'grape']
    
5. indexOf():
- Returns the index of the first occurrence of a specified element in an array.
Example:
let bananaIndex = fruits.indexOf('banana');
// Result: 2 (index of 'banana' in the array)

6. slice():
- Returns a shallow copy of a portion of an array into a new array object.
Example:
let slicedFruits = fruits.slice(1, 3);
// Result: ['blueberry', 'orange'] (elements at index 1 and 2)

7. splice():
- Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
Example:
fruits.splice(1, 2, 'grapefruit', 'pineapple');
// Result: ['watermelon', 'grapefruit', 'pineapple', 'banana', 'grape']

8. forEach():
- Calls a provided function once for each element in an array.
Example:

fruits.forEach(fruit => {
console.log(fruit);
});
// Outputs each fruit in the array

These are some essential array methods in JavaScript. Understanding and using these methods will greatly enhance your ability to work with arrays effectively.


Topic: Arrays and its Properties in JavaScript

Arrays are a fundamental data structure in JavaScript that allow you to store and organize multiple values in a single variable. Here are some important properties and operations related to Arrays:

1. Creating Arrays:
- Arrays can be created using square brackets [] and can hold various data types.
Example:
let myArray = [1, 2, 3, 'four', true];
    
2. Accessing Elements:
- Elements in an array are accessed using zero-based indexing.
Example:
let firstElement = myArray[0]; // Accessing the first element (1)
let thirdElement = myArray[2]; // Accessing the third element (3)
    
3. Length Property:
- The length property returns the number of elements in an array.
Example:
let arrayLength = myArray.length; // Returns the length of the array (5)
    
4. Modifying Elements:
- Elements in an array can be modified using their index.
Example:
myArray[1] = 'two'; // Modifying the second element
    
5. Adding Elements:
- Elements can be added to the end of an array using the push() method.
Example:
myArray.push(5); // Adds the value 5 to the end of the array
    
6. Removing Elements:
- Elements can be removed from the end of an array using the pop() method.
Example:
let removedElement = myArray.pop(); // Removes the last element and returns it
    
7. Iterating through Arrays:
- Arrays can be iterated using loops like for or forEach.
Example:
for (let i = 0; i < myArray.length; i++) {
          console.log(myArray[i]); // Outputs each element in the array
}

myArray.forEach(element => {
    console.log(element); // Outputs each element using forEach
});
    
8. Multidimensional Arrays:
- Arrays can also hold other arrays, creating multidimensional arrays.
Example:
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

These are some essential properties and operations related to Arrays in JavaScript. Understanding these concepts will help you effectively work with arrays in your programs.
*/
