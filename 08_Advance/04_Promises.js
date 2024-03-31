// ! Promises type 1
// ? Promise by declaring a constant
// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Promise One SetTimeOut!');
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log('Promise One Resolved!');
// });

// ! Promises type 2
// ? Promise without declaring a constant
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Promise Two SetTimeOut!');
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log('Promise Two Resolved!');
// });

// ! Promises type 3
// ? Promises by passing a value using tghe resolve function
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise Three SetTimeOut!");
//     resolve({
//       username: "Jarvish Dev",
//       phone: 9876543210,
//       age: 23,
//     });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
//   console.log(user.username);
//   console.log("Promise Three Resolved!");
// });

// ! Promises type 4
// ? Promises with Reject
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("\nPromise Four SetTimeOut!");
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "Jarvish Dev",
//         phone: 9876543210,
//         age: 23,
//       });
//     }
//     else {
//       reject('ERROR: An unexpected error occured!');
//     }
//   }, 1000);
// });
// promiseFour.then(function (user) {
//   console.log('\nPromise Four Resolved! 1');
//   console.log(user);
//   return user.username;
// }).then(function (userName) {
//   console.log('\nPromise Four Resolved! 2');
//   console.log(userName);
// }).catch(function (err) {
//   console.log('\nPromise Four Rejected!');
//   console.log(err);
// }).finally(function () {
//   console.log('\nPromise Ends!');
// });

// ! Promise type 5
// ? Promises using Async Await
// const promiseFive = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		let error = false;
// 		if (!error) {
// 			resolve("Promise Five Passed");
// 		} else {
// 			reject("Promise Five Failed");
// 		}
// 	}, 1000);
// });
// async function callPromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }
// callPromiseFive();
// ? If there is an Error
// node:internal/process/promises:289
// triggerUncaughtException(err, true /* fromPromise */);
// ^
// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Promise Five Failed".] {code: 'ERR_UNHANDLED_REJECTION'}
// callPromiseFive();
// ? If there is no error
// Promise five passed

// async function callPromiseFive() {
// 	try {
// 		const response = await promiseFive;
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// callPromiseFive();
// IF there is an error
// Promise Failed
// IF there is no error
// Promise Success

// ! No try and catch block
// async function getAllUsers() {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/users');
// 		const data = await response.json();
// 		console.log(data);
// }
// ! With a try and catch block
// async function getAllUsers() {
// 	try {
// 		const response = await fetch(
// 			"https://jsonplaceholder.typicode.com/users"
// 		);
// 		console.log(typeof response);
// 		const data = await response.json();
// 		console.log(typeof data);
// 		console.log(data);
// 	} catch (error) {
// 		console.log("E: ", error);
// 	}
// }
// getAllUsers();
// async function getAllUsers() {
// 	try {
// 		const response = await fetch(
// 			"https://api.github.com/users/hiteshchoudhary"
// 		);
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log("E: ", error);
// 	}
// }
// getAllUsers();

// ! Using Fetch API
// fetch("https://api.github.com/users/hiteshchoudhary")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((error) => console.log(error))
// 	.finally(() => {
// 		console.log("END of Fetch API");
// 	});

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 100, "food");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });
