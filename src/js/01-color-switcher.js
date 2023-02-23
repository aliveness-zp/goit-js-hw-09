const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = 0;
stoptBtn.setAttribute('disabled', true);

console.log(startBtn);
console.log(bodyEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// START_BTN

startBtn.addEventListener('click', startBodyColorChangeInterval);

function startBodyColorChangeInterval() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    console.log(bodyEl.style.backgroundColor);
    startBtn.setAttribute('disabled', true);
    stoptBtn.removeAttribute('disabled');
  }, 1000);
}

// STOP_BTN

stoptBtn.addEventListener('click', stopBodyColorChangeInterval);

function stopBodyColorChangeInterval() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stoptBtn.setAttribute('disabled', true);
}
