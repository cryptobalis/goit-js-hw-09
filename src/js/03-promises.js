import Notiflix from 'notiflix';

import "notiflix/dist/notiflix-3.2.6.min.css";


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
  resolve({ position, delay });
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
  reject({ position, delay });
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  }, delay);
  });
  }


const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(form.delay.value);
  const step = parseInt(form.step.value);
  const amount = parseInt(form.amount.value);
  for (let i = 1; i <= amount; i++) {
    const currentDelay = delay + (i - 1) * step;
    createPromise(i, currentDelay);
  }
});

