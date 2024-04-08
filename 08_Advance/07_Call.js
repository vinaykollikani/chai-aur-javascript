// function setUsername(username) {
// 	this.setUsername = username;
// 	console.log(`Set Username called...`);
// }

// function userDetails(username, password) {
// 	setUsername(username);
// 	this.password = password;
// }

// const userOne = new userDetails("Jarvish Dev", "Vinaykr@7");
// console.log(userOne);

// Set Username called...
// userDetails { password: 'Vinaykr@7' }
// ! setUsername called but username is not set in the object.

// ! Using 'CALL' method and 'THIS' method while function calling to give an context
function setUsername(username) {
	this.setUsername = username;
	console.log(`Set Username called...`);
}

function userDetails(username, password) {
	setUsername.call(this, username);
	this.password = password;
}

const userOne = new userDetails("Jarvish Dev", "Vinaykr@7");
console.log(userOne);

// Set Username called...
// userDetails { setUsername: 'Jarvish Dev', password: 'Vinaykr@7' }
