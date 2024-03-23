const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const height = document.getElementById("height").value;
	const weight = document.getElementById("weight").value;
	// console.log("height: " + height + " weight: " + weight);

	const bmi = (weight / ((height * height) / 10000)).toFixed(2);
	const resultsDiv = document.querySelector(".results_div");
	if (bmi <= 24.9 && bmi >= 18.6) {
		resultsDiv.style.padding = "6px";
		resultsDiv.style.border = "2px solid green";
		resultsDiv.innerHTML = `<span>BMI:</span><span>${bmi}</span></br><span>(NR)</span>`;
	} else if (bmi >= 25) {
		resultsDiv.style.padding = "6px";
		resultsDiv.style.border = "2px solid red";
		resultsDiv.innerHTML = `<span>BMI:</span><span>${bmi}</span></br><span>(OW)</span>`;
	} else if (bmi <= 18.5) {
		resultsDiv.style.padding = "6px";
		resultsDiv.style.border = "2px solid red";
		resultsDiv.innerHTML = `<span>BMI:</span><span>${bmi}</span></br><span>(UW)</span>`;
	}
});
