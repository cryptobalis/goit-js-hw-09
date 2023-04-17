const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function startColorChanging() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

  function stopColorChanging() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
  }

  startBtn.addEventListener('click', startColorChanging);
stopBtn.addEventListener('click', stopColorChanging);
