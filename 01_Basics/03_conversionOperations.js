// ? Conversion of datatypes
// ! ------------------------
// ? Converting any datatype into Number
// Example :
// let dataExample = "357b";
// let convertedNumber = Number(dataExample);
// console.log(convertedNumber);
// console.log(typeof(convertedNumber));

// * number => 7 => Number
// * string => "107" => 107 => Number
// * string => "357b" => NaN  => Number
// * boolean => true => 1 => Number
// * boolean => false => 0 => Number
// * null => 0 => Number
// * undefined => NaN => NotANumber => Number

// ? Converting any datatype into String
// Example :
// let dataExample = undefined;
// let convertedString = String(dataExample);
// console.log(convertedString);
// console.log(typeof(convertedString));

// * number => 7 => String
// * string => "107" => 107 => String
// * string => "357b" => 357b => String
// * boolean => true => true => String
// * boolean => false => false => String
// * null => null => String
// * undefined => undefined => String

// ? Converting any datatype into String
// Example :
// let dataExample = undefined;
// let convertedBoolean = Boolean(dataExample);
// console.log(convertedBoolean);
// console.log(typeof convertedBoolean);

// * number => 7 => true => Boolean
// * string => "107" => true => Boolean
// * string => "357b" => true => Boolean
// * boolean => true => true => Boolean
// * boolean => false => false => Boolean
// * null => false => Boolean
// * undefined => false => Boolean

// ! ---------------- OPERATIONS ----------------

let value1 = 10;
let value2 = 2;
// console.log("Addition : " + value1 + value2); //! 102
// console.log("Addition : " + (value1 + value2)); //! 12
// console.log("Subtraction : " + (value1 - value2)); //! 8
// console.log("Multiplication : " + value1 * value2); //! 20
// console.log("Division : " + value1 / value2); //! 5
// console.log("Modulo/Remainder : " + (value1 % value2)); //! 0
// console.log("Power : " + value1 ** value2); //! 100

// console.log(7 + 9); // 16
// console.log(7 + "9"); // 79
// console.log("7" + 9); // 79
// console.log("7" + "9"); // 79
// console.log("2" + 6 + 4); // 264
// console.log(4 + 6 + "4"); // 104
// ? In the above cases, JavaScript Converts the values
// into string or number based on their position.
// ? If the first value is String, then the rest values
// are also converted into Strings.
// ? If the starting values are numbers, then operation
// is done on the following numbers until a string value is found.

// let str1 = "Hello ";
// let str2 = "World";
// let str3 = str1 + str2;
// console.log(str3); // Hello World
// let str1 = 107;
// let str2 = "701";
// let str3 = str1 + str2;
// console.log(str3); // 107701

// ! The following type of codes should be avoided, for readability
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(9 + 7 * 45 / 5); // 72
// let num1, num2, num3;
// num1 = num2 = num3 =  7 + 5;
// console.log(num1);

// ? PostFix and Prefix Increment / Decrement

// let num1 = 7;
// console.log("Prefix Increment for num1 - 7 : " + ++num1); // 8 Increases in the same occurance
// let num2 = 7;
// console.log("Postfix Increment for num2 - 7 : " + num2++); // 7 Increases in the next occurance
// console.log("Postfix Increment for num2 - next Occurance : " + num2); //8

// let num1 = 7;
// console.log("Prefix decrement for num1 - 7 : " + --num1); // 6 decreases in the same occurance
// let num2 = 7;
// console.log("Postfix decrement for num2 - 7 : " + num2--); // 7 decreases in the next occurance
// console.log("Postfix decrement for num2 - next Occurance : " + num2); // 6
