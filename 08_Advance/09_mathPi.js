const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// Output : {
//   value: 3.141592653589793,
// writable: false, // Not changable
//   enumerable: false, // Not etarateable
//   configurable: false
// }

const userDetails = {
	userName: "Jarvish Dev",
	password: "Vinaykr@7",
	isLoggedIn: true,
};
// console.log(userDetails);
// console.log(Object.getOwnPropertyDescriptor(userDetails, 'userName'));
// ! Output
// {
//   value: 'Jarvish Dev',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// ! Define Object Properties

Object.defineProperty(userDetails, "password", {
	writable: false,
	enumerable: false,
	configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(userDetails, "password"));
// ! Output
// {
//   value: 'Vinaykr@7',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

for (let [key, value] of Object.entries(userDetails)) {
	if (typeof value !== 'function') {
		console.log(`${key} : ${value}`);
	}
}
