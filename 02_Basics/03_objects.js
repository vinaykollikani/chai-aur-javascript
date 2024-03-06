// JavaScript Objects
// Real Life Objects, Properties, and Methods
// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:

// Object Properties
// car.name = Fiat
// car.model = 500
// car.weight = 850kg
// car.color = white

// Object Methods
// car.start()
// car.drive()
// car.brake()
// car.stop()

// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.

// ! Objects 
// The values are written as name:value pairs (name and value separated by a colon).
// Example :
const car = {
    brand : "Tata",
    model : "Nexon",
    color : "Black",
    // "top speed" : 180,
    topSpeed : 180,
    price : 5000000,
    // [mySymbol] : "mySymbol"
}

// We can access Object properties in two different ways,
// 1 :
// console.log(car["top speed"]);
// 2 :
// console.log(car.brand);

// We can add a symbol into a Object
// console.log(car[mySymbol])

// Adding a function to an object
car.speed = function() {
    console.log("Speed of car : " + this.topSpeed);
}
console.log(car.speed());