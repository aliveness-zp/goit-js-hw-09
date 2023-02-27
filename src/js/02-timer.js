import flatpickr from 'flatpickr';
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

// ССЫЛКИ, ПЕРЕМЕННЫЕ, СОБЫТИЯ

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.start.setAttribute('disabled', true);
refs.start.addEventListener('click', () => {
  timer.start();
});

let selectedDate = null;
let currentDate = Date.now();

// ОБЪЕКТ НАСТРОЕК БИБЛИОТЕКИ

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (currentDate > selectedDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.start.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

// ТАЙМЕР

const timer = {
  start() {
    setInterval(() => {
      refs.start.setAttribute('disabled', true);
      let currentDate = Date.now();
      const deltaTime = selectedDate - currentDate;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimer(convertMs(deltaTime));
      console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// КОНВЕРТАЦИЯ ВРЕМЕНИ

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// НАСТРОЙКА ИНТЕРФЕЙСА

function updateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
