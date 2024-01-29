const rollNumber = "307HD031"; // 'const' is used to assign a fixed value in the variable "Constant"
var studentName = "Kollikani Vinay Kumar"; // 'var' is replaced by 'let'
let studentCity = "Rayagada";
studentAge = 23; // Not an error, but should be avoided

let studentState; // Value Not Defined i.e. undefined
let studentSalary = null; // Null Value

console.log(rollNumber);
console.log(studentName);
console.log(studentCity);
console.log(studentAge);
console.log(studentState);
console.log(studentSalary);

console.table([
	rollNumber,
	studentName,
	studentCity,
	studentAge,
	studentState,
	studentSalary,
]);

let age = 23;
{
	let age = 24;
	console.log("Let inside block : " + age);
}
console.log("Let outside block : " + age);

var num = 7;
{
	var num = 89;
	console.log("Var inside block : " + age);
}
console.log("Var outside block : " + age);

/* // ! Difference Between Var and Let
   In the latest versions of JavaScript 
   'Var' is replaced by 'Let' keyword to define a variable because var is not Block Scope and Let is Block Scope 
   Block : {};
   i.e. a same variable can be declared a number of times using 'var', but using 'let' keyword we can declare the variable only once in a block;
   E.g. 
   using var : // ? Possible
   {
      var age = 45;
      var age = 46;
   }
   using let : // ? Not Possible
   {
      let age = 45;
      let age = 46;
   }
   using let : // ? Possible
   let age = 45;
   {
      let age = 46;
   }
*/
