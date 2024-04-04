// ! Variables Declaration
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const timer = document.querySelector(".timer");
let hr = 0;
let min = 0;
let sec = 0;
let millisec = 0;
let setTimer;

// ! Display Timer Function
function displayTimer() {
	if (runningTime) {
		millisec++;
		if (millisec > 99) {
			sec = sec + 1;
			millisec = 0;
		} else if (sec > 59) {
			min = min + 1;
			sec = 0;
		} else if (min > 59) {
			hr = hr + 1;
			min = 0;
		}
		if (hr < 10 && min < 10 && sec < 10 && millisec < 10) {
			timer.innerHTML = `0${hr}:0${min}:0${sec}.0${millisec}`;
		} else if (hr < 10 && min < 10 && sec < 10 && millisec >= 10) {
			timer.innerHTML = `0${hr}:0${min}:0${sec}.${millisec}`;
		} else if (hr < 10 && min < 10 && sec >= 10 && millisec >= 10) {
			timer.innerHTML = `0${hr}:0${min}:${sec}.${millisec}`;
		} else if (hr < 10 && min >= 10 && sec >= 10 && millisec >= 10) {
			timer.innerHTML = `0${hr}:${min}:${sec}.${millisec}`;
		} else if (hr >= 10 && min >= 10 && sec >= 10 && millisec >= 10) {
			timer.innerHTML = `${hr}:${min}:${sec}.${millisec}`;
		}
	}
}

// ! Start Timer Function
function startTimer() {
	runningTime = true;
	setTimer = setInterval(() => {
		displayTimer();
	}, 10);
	start.disabled = true;
	// console.log("Start Timer");
}

// ! Stop Timer Function
function stopTimer() {
	clearInterval(setTimer);
	runningTime = false;
	start.disabled = false;
	// console.log("Stop Timer");
}

// ! Reset Timer Function
function resetTimer() {
	clearInterval(setTimer);
	runningTime = false;
	timer.innerHTML = `00:00:00`;
	hr = 0;
	min = 0;
	sec = 0;
	millisec = 0;
	start.disabled = false;
	// console.log("Reset Timer");
}

// ! Adding Event Listeners
start.addEventListener("click", startTimer, false);
reset.addEventListener("click", resetTimer, false);
stop.addEventListener("click", stopTimer, false);
