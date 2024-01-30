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
