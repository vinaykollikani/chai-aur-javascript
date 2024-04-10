// ES6

class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	encryptPassword() {
		return `${this.password}abc`;
	}
	changeUsername() {
		return `${this.username.toUpperCase()}`;
	}
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

// function User(username, email, password) {
// 	this.username = username;
// 	this.email = email;
// 	this.password = password;
// }

// User.prototype.encryptPassword = function () {
// 	return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
// 	return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());


// ! Bind

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>React</title>
// </head>
// <body>
//     <button>Button Clicked</button>
// </body>
// <script>
//     class React {
//         constructor(){
//             this.library = "React"
//             this.server = "https://localhost:300"

//             //requirement
//             document
//                 .querySelector('button')
//                 .addEventListener('click', this.handleClick.bind(this))

//         }
//         handleClick(){
//             console.log("button clicked");
//             console.log(this.server);
//         }
//     }

//     const app = new React()
// </script>
// </html>