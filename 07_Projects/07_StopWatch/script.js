const start = document.getElementById('start');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');
const timer = document.getElementsByClassName('timer');

function displayTimer(){
  console.log('display time');  
}

function startTimer(){
  console.log('start time');
  displayTimer();
}

function stopTimer(){
  console.log('stop time');
}

function resetTimer(){
  console.log('reset time');
}

start.addEventListener('click', startTimer, false);
stop.addEventListener('click', stopTimer, false);
reset.addEventListener('click', resetTimer, false);