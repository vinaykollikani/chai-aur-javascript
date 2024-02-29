// console.log(Math.floor(Date.now() / 1000));
// const dateNow = new Date();
// console.log(dateNow.toString());
// console.log(dateNow.toLocaleString());
// console.log(dateNow.toDateString());
// console.log(dateNow.toJSON());

// ------------------- NOTES -------------------

/*
    The Date object is a built-in JavaScript object. It allows us to work with dates: create, display, and modify them. 
*/

/*
// Creating a Date Object
let date = new Date();
console.log(date); // Logs the current date and time

// Date Object Methods

// getFullYear()
console.log("getFullYear() : " + date.getFullYear()); // Returns the year of a date as a four-digit number

// getMonth()
console.log("getMonth() : " + date.getMonth()); // Returns the month of a date as a number (0-11)

// getDate()
console.log("getDate() : " + date.getDate()); // Returns the day of a date (1-31)

// getHours()
console.log("getHours() : " + date.getHours()); // Returns the hour (0-23) of the date and time

// getMinutes()
console.log("getMinutes() : " + date.getMinutes()); // Returns the minutes (0-59) of the date and time

// getSeconds()
console.log("getSeconds() : " + date.getSeconds()); // Returns the seconds (0-59) of the date and time

// getMilliseconds()
console.log("getMilliseconds() : " + date.getMilliseconds()); // Returns the milliseconds (0-999) of the date and time

// getTime()
console.log("getTime() : " + date.getTime()); // Returns the number of milliseconds since January 1, 1970

// getDay()
console.log("getDay() : " + date.getDay()); // Returns the weekday as a number (0-6)

// getTimezoneOffset()
console.log("getTimezoneOffset() : " + date.getTimezoneOffset()); // Returns the time difference between UTC and Local Time, in minutes

// getUTCDate(), getUTCDay(), getUTCFullYear(), getUTCHours(), getUTCMilliseconds(), getUTCMinutes(), getUTCMonth(), getUTCSeconds()
// These methods work the same way as their non-UTC counterparts, but they return the date and time in UTC (Coordinated Universal Time)

// setDate(), setFullYear(), setHours(), setMilliseconds(), setMinutes(), setMonth(), setSeconds(), setTime()
// These methods are used to set specific components of a date and time

// setUTCDate(), setUTCFullYear(), setUTCHours(), setUTCMilliseconds(), setUTCMinutes(), setUTCMonth(), setUTCSeconds()
// These methods work the same way as their non-UTC counterparts, but they set the date and time in UTC

// toDateString()
console.log("toDateString() : " + date.toDateString()); // Converts the date portion of a Date object into a readable string

// toISOString()
console.log("toISOString() : " + date.toISOString()); // Returns the date as a string, using the ISO standard

// toJSON()
console.log("toJSON() : " + date.toJSON()); // Returns the date as a string, formatted as a JSON date

// toLocaleDateString()
console.log("toLocaleDateString() : " + date.toLocaleDateString()); // Returns the date portion of a Date object as a string, using locale conventions

// toLocaleTimeString()
console.log("toLocaleTimeString() : " + date.toLocaleTimeString()); // Returns the time portion of a Date object as a string, using locale conventions

// toLocaleString()
console.log("toLocaleString() : " + date.toLocaleString()); // Converts a Date object to a string, using locale conventions

// toString()
console.log("toString() : " + date.toString()); // Converts a Date object to a string

// toTimeString()
console.log("toTimeString() : " + date.toTimeString()); // Converts the time portion of a Date object to a string

// toUTCString()
console.log("toUTCString() : " + date.toUTCString()); // Converts a Date object to a string, according to universal time

// ValueOf()
console.log("valueOf() : " + date.valueOf()); // Returns the primitive value of a Date object

*/
/*
2024-02-29T12:24:56.882Z
getFullYear() : 2024
getMonth() : 1
getDate() : 29
getHours() : 17
getMinutes() : 54
getSeconds() : 56
getMilliseconds() : 882
getTime() : 1709209496882
getDay() : 4
getTimezoneOffset() : -330
toDateString() : Thu Feb 29 2024
toISOString() : 2024-02-29T12:24:56.882Z
toJSON() : 2024-02-29T12:24:56.882Z
toLocaleDateString() : 29/2/2024
toLocaleTimeString() : 5:54:56 pm
toLocaleString() : 29/2/2024, 5:54:56 pm
toString() : Thu Feb 29 2024 17:54:56 GMT+0530 (India Standard Time)
toTimeString() : 17:54:56 GMT+0530 (India Standard Time)
toUTCString() : Thu, 29 Feb 2024 12:24:56 GMT
valueOf() : 1709209496882
*/
