import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

import "notiflix/dist/notiflix-3.2.6.min.css";

const inputDate = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysValue = document.querySelector("[data-days]");
const hoursValue = document.querySelector("[data-hours]");
const minutesValue = document.querySelector("[data-minutes]");
const secondsValue = document.querySelector("[data-seconds]");


startButton.disabled = true;

let countdownIntervalId;

function updateCountdown(endDate) {
  const now = new Date();
  const timeRemaining = Math.max((endDate - now) / 1000, 0);

  const days = Math.floor(timeRemaining / 86400);
  const hours = Math.floor((timeRemaining % 86400) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = Math.floor(timeRemaining % 60);

  daysValue.textContent = days.toString().padStart(2, "0");
  hoursValue.textContent = hours.toString().padStart(2, "0");
  minutesValue.textContent = minutes.toString().padStart(2, "0");
  secondsValue.textContent = seconds.toString().padStart(2, "0");

  if (timeRemaining === 0) {
    clearInterval(countdownIntervalId);
  }
}


flatpickr(inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;

      startButton.addEventListener("click", () => {
        clearInterval(countdownIntervalId);

        countdownIntervalId = setInterval(() => {
            updateCountdown(selectedDate);
        }, 1000);
      });
    }
  },
});






