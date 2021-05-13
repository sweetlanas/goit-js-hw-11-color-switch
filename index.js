const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBth: document.querySelector('[data-action="stop"]'),
  body: document.body,
}


refs.startBtn.addEventListener('click', onStart);
refs.stopBth.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  timerId = setInterval(() => {
     refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length -1)]
  }, 1000);
  refs.startBtn.disabled = true;
}

function onStop() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};