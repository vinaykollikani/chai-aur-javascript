function random() {
  hex = '0123456789ABCDEF';
  color = '#';
  for (let index = 0; index < 6; index++) {
    const pos = Math.floor(Math.random() * 16);
    color += hex[pos];
    // console.log(color);
  }
  return color;
}
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const hexDisplay = document.querySelector('#hex');
const bgChangeDiv = document.querySelector('.bgChanger');
let setIntervalId;
function startColorChanger() {
  const randomColor = random();
  hexDisplay.innerHTML = `${randomColor}`;
  bgChangeDiv.style.backgroundColor = randomColor;
}
function stopColorChanger() {
  clearInterval(setIntervalId);
  setIntervalId = null;
}

start.addEventListener('click', function (event) {
  if (!setIntervalId) {
    setIntervalId = setInterval(startColorChanger, 500);
  }
});

stop.addEventListener('click', stopColorChanger);
// start.addEventListener('click', function (event) {
//   event.preventDefault();
//   const randomColor = random();
//   console.log(randomColor);
//   hexDisplay.innerHTML = `${randomColor}`;
// });