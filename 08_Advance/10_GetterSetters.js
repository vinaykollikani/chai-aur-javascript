// let user = [];
// for (let index = 0; index < 10; index++) {
// 	user[index] = index;
// 	console.log(user[index]);
// }
// ! Getters and setters using CLASS methods
// class User {
// 	constructor(username, password) {
// 		this.username = username;
// 		this.password = password;
// 	}
// 	get username() {
// 		return this._username.toUpperCase();
// 	}
// 	set username(value) {
// 		this._username = value;
// 	}
// 	get password() {
// 		return this._password.toUpperCase();
// 	}
// 	set password(value) {
// 		this._password = value;
// 	}
// }
// const userOne = new User("userOne", "user@pass$11");
// console.log(userOne.username);
// console.log(userOne.password);

// ! Getters and setters using FUNCTION
// function User(username, password) {
// 	this._username = username;
// 	this._password = password;

// 	Object.defineProperty(this, "username", {
// 		get: function () {
// 			return this._username.toUpperCase();
// 		},
// 		set: function (value) {
// 			this._username = value;
// 		},
// 	});
// 	Object.defineProperty(this, "password", {
// 		get: function () {
// 			return this._password.toUpperCase();
// 		},
// 		set: function (value) {
// 			this._password = value;
// 		},
// 	});
// }

// const userTwo = new User("userTwo", "user@pass$22");
// console.log(userTwo.username);

// ! Getters and setters using OBJECTS
const User = {
	_username: "userThree",
	_password: "user@pass$33",

	get username() {
		return this._username.toUpperCase();
	},
	set username(value) {
		this._username = value;
	},

	get password() {
		return this._password.toUpperCase();
	},
	set password(value) {
		this._password = value;
	},
};

const userThree = Object.create(User);
userThree.username = "userThreeFOUR";
console.log(userThree.username);
