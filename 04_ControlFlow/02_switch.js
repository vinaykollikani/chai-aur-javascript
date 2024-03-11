// Topic: SWITCH Conditionals

// The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

// Syntax of SWITCH Statement:
// switch(expression) {
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//         // code block
// }

// Here's an example to illustrate:

function getFruitColor(fruit) {
	var color = "";
	switch (fruit) {
		case "Apple":
			color = "Red";
			break;
		case "Banana":
			color = "Yellow";
			break;
		case "Grapes":
			color = "Green";
			break;
		default:
			color = "Unknown";
			break;
	}
	return color;
}

console.log(getFruitColor("Apple")); // Outputs: Red
console.log(getFruitColor("Banana")); // Outputs: Yellow
console.log(getFruitColor("Grapes")); // Outputs: Green
console.log(getFruitColor("Mango")); // Outputs: Unknown

// In this example, the switch statement checks the fruit parameter.
// If the fruit is 'Apple', it sets the color to 'Red'.
// If the fruit is 'Banana', it sets the color to 'Yellow'.
// If the fruit is 'Grapes', it sets the color to 'Green'.
// If the fruit is anything else, it sets the color to 'Unknown'.
