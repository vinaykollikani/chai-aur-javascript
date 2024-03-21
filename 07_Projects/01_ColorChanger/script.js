const body = document.querySelector("body");
const buttons = document.querySelectorAll(".color_button");
buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		if (event.target.id === "blue") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "teal") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "mintcream") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "green") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "slategray") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "yellow") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "beige") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "brown") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "orange") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "red") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "maroon") {
			body.style.backgroundColor = event.target.id;
		} else if (event.target.id === "pink") {
			body.style.backgroundColor = event.target.id;
		}
	});
});
