// to add one array into another.
const numbers = [1, 2, 3, 4, 5];
const vowels = ["a", "e", "i", "o", "u"];
const names = ["Hello", "World", "JavScript"];

// Push is used to add one array into another as an array member.
// const newArray = numbers.push(vowels); // [ 1, 2, 3, 4, 5, [ 'a', 'e', 'i', 'o', 'u' ] ]
// console.log(numbers);

//! Array.prototype.concat()
// The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// const newArray = numbers.concat(vowels);
// console.log(newArray); // [ 1,   2,   3,   4,   5, 'a', 'e', 'i', 'o', 'u']

// To join more than two arrays
//! const newArray = [...numbers, ...vowels, ...names];
// console.log(newArray);
// [1, 2, 3, 4, 5, "a", "e", "i", "o", "u", "Hello", "World", "JavScript"];

//! Array.prototype.flat()
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
// console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
// console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
// const myArray = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10]], [11, 12]];
// const flatArray = myArray.flat(Infinity);
// console.log(flatArray);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//! Array.isArray()
// The Array.isArray() static method determines whether the passed value is an Array.
// console.log(Array.isArray([1, 3, 5])); // True
// console.log(Array.isArray(['a', 'b', 'c', 'd'])); // True
// console.log(Array.isArray("Jarvish Dev")); // False

//! Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
// console.log(Array.from("Jarvish Dev"));
// ["J", "a", "r", "v", "i", "s", "h", " ", "D", "e", "v"];

//! console.log(Array.from({ name: "hitesh" })); // interesting

//! Array.of()
// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]
// console.log(Array.of());
// Expected output: Array []
// console.log(Array.of(vowels, numbers, names));
// [
// 	["a", "e", "i", "o", "u"],
// 	[1, 2, 3, 4, 5],
// 	["Hello", "World", "JavScript"],
// ];
// const name1 = "Jarvish";
// const name2 = "Developer";
// const name3 = "Vinay Kumar";
// console.log(Array.of(name1, name2, name3));
// [ 'Jarvish', 'Developer', 'Vinay Kumar' ]
