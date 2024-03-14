/*
  Maps in JavaScript

  Maps are a data structure that store key-value pairs. In JavaScript, maps provide an efficient way to store and retrieve data with keys that can be of any data type.

  Syntax for creating a Map:
    new Map([iterable])

  Methods and Properties:
    - set(key, value): Adds or updates an element with the specified key and value.
    - get(key): Returns the value associated with the specified key, or undefined if the key does not exist in the Map.
    - delete(key): Removes the element with the specified key from the Map.
    - has(key): Returns true if the Map contains an element with the specified key, otherwise false.
    - clear(): Removes all elements from the Map.
    - size: Returns the number of elements in the Map.

  Example:
    Let's create a Map to store information about countries and their capitals.
*/

// Create a new Map
const countriesMap = new Map();

// Adding elements to the Map using set()
countriesMap.set('USA', 'Washington D.C.');
countriesMap.set('UK', 'London');
countriesMap.set('France', 'Paris');

// Retrieve values from the Map using get()
console.log("Capital of USA:", countriesMap.get('USA')); 
  // Output: Capital of USA: Washington D.C.

// Check if a key exists in the Map using has()
console.log("Does Germany exist in the Map?", countriesMap.has('Germany')); 
  // Output: Does Germany exist in the Map? false

// Get the size of the Map
console.log("Number of elements in the Map:", countriesMap.size); 
  // Output: Number of elements in the Map: 3

// Iterate over the Map using forEach()
console.log("Iterating over the Map:");
countriesMap.forEach((value, key) => {
  console.log(key, "->", value);
});

/*
  Output:
  USA -> Washington D.C.
  UK -> London
  France -> Paris
*/

// Deleting an element from the Map using delete()
countriesMap.delete('UK');

console.log("After deleting UK from the Map:");
countriesMap.forEach((value, key) => {
  console.log(key, "->", value);
});

/*
  Output:
  USA -> Washington D.C.
  France -> Paris
*/

// Clearing the Map using clear()
countriesMap.clear();

console.log("After clearing the Map, size:", countriesMap.size); // Output: After clearing the Map, size: 0
