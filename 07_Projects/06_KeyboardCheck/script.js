const key1 = document.getElementById('key');
const keyName1 = document.getElementById('keyName');
const keyCode1 = document.getElementById('keyCode');
window.addEventListener('keydown', (event) => {
  // console.log(event.keyCode);
  // console.log(event.key);
  // console.log(event.code);
  key1.innerHTML = `${event.key === ' ' ? 'Space' : event.key}`;
  keyCode1.innerHTML = `${event.keyCode}`;
  keyName1.innerHTML = `${event.code}`;
}); 